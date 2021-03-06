import React, { Fragment } from "react";
import EmployeeRow from "./EmployeeRow";
import styled from "styled-components";
import { Button } from "./Button";
import { colors } from "@yoast/style-guide";
import NewEmployeeForm from "./AddNewEmployeeForm";

const TableHead = styled.thead`
  	font-size: 1em;
  	border-radius: 10px;
  	text-align: center;
`;

const TableWrapper = styled.div`
	width: 100%;
	background-color: ${ colors.$palette_grey_ultra_light };
`;

const Table = styled.table`
	margin: 0 auto;
`;

const AdminButton = styled( Button )`
	float: right;
`;

export default class EmployeeTable extends React.Component {
	componentDidMount() {
		this.props.getEmployees();
	}

	renderNewEmployeeForm( adminLoggedIn, addNewEmployee ) {
		if( adminLoggedIn ) {
			return (
				<NewEmployeeForm addNewEmployee={ addNewEmployee } />
			);
		}
	}

	sortEmployeesByPriority( employees ) {
		return employees.sort( ( a, b ) => {
			// First, sort by priority (higher priority goes first).
			let sorter = b.priority - a.priority;

			// If priority is equal, sort by first name.
			if ( sorter === 0 ) {
				const toGoFirst = [ a.firstName, b.firstName ].sort()[ 0 ];
				sorter = toGoFirst === a.firstName ? -1 : 1;
			}
			return sorter;
		} )
	}

	render() {
		const sortedEmployees = this.sortEmployeesByPriority( this.props.employees );
		return (
			<Fragment>
				<TableWrapper>
					<Table>
						<TableHead>
							<tr>
								<th>Name</th>
								<th colSpan="4">Building</th>
								<th>Away</th>
							</tr>
						</TableHead>
						<tbody>
							{ sortedEmployees.map( employee => (
								<EmployeeRow
									key={employee.id}
									employee={employee}
									changeBuilding={ this.props.changeBuilding }
									deleteEmployee={ this.props.deleteEmployee }
									adminLoggedIn={ this.props.adminLoggedIn }
								/>
							) ) }
						</tbody>
					</Table>
					{
						this.renderNewEmployeeForm( this.props.adminLoggedIn, this.props.addNewEmployee )
					}
					<AdminButton
						onClick={ () => this.props.toggleAdminOptions() }
					>
						Edit
					</AdminButton>
				</TableWrapper>
			</Fragment>
		);
	}
}
