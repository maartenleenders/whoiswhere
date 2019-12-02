import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import {Client, Server} from 'socket.io';
import {EmployeeService} from "../employee/employee.service";
import {
    NewEmployeeRequestAction,
    RetrieveEmployeesAction,
    UpdateEmployeeBuildingAction,
    NEW_EMPLOYEE_CREATED,
    RETRIEVE_EMPLOYEES,
    UPDATE_EMPLOYEE_BUILDING,
    INCOMING_EMPLOYEES,
    DELETE_EMPLOYEE_SUCCESS,
    NEW_EMPLOYEE_REQUEST,
} from "../types/reduxTypes";
import {forwardRef, Inject} from "@nestjs/common";

@WebSocketGateway()
export class EventsGateway {
    constructor(
        @Inject(forwardRef( () => EmployeeService ) )
        private readonly employeeService: EmployeeService,
    ) {
    }

    @WebSocketServer()
    server: Server;

    @SubscribeMessage(RETRIEVE_EMPLOYEES)
    async retrieveEmployees(client: Client, action: RetrieveEmployeesAction) {
        const employees = await this.employeeService.getAll();
        client.emit("serverReduxAction", {type: INCOMING_EMPLOYEES, employees});
    }

    @SubscribeMessage(UPDATE_EMPLOYEE_BUILDING)
    async updateEmployeeBuilding(client: Client, action: UpdateEmployeeBuildingAction) {
        await this.employeeService.setBuilding(action.employeeId, action.buildingId);
        client.broadcast.emit("serverReduxAction", {
                type: UPDATE_EMPLOYEE_BUILDING,
                employeeId: action.employeeId,
                buildingId: action.buildingId,
            },
        );
    }

    @SubscribeMessage(NEW_EMPLOYEE_REQUEST)
    async createEmployee(client: Client, action: NewEmployeeRequestAction) {
        const employee = await this.employeeService.create(action.employeeData);
        this.server.emit("serverReduxAction", {
            type: NEW_EMPLOYEE_CREATED,
            employee,
        });
    }

    confirmDeletion( employeeId: number ) {
        this.server.emit( "serverReduxAction", {
            type: DELETE_EMPLOYEE_SUCCESS,
            employeeId,
        } );
    }
}
