import React, { Fragment } from "react";
import EmployeeRow from "./EmployeeRow";
import styled from "styled-components";
import { Button, ButtonArea } from "./Button";
import { colors } from "@yoast/style-guide";

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

const AdminButton = styled.button`
	float: right;
`;

export default class EmployeeTable extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.getEmployees();
	}

	renderAdminOptions() {
		if ( this.props.adminLoggedIn ) {
			return(
				<ButtonArea>
					<Button
						onClick={ () => this.props.goTo( "new-employee" ) }
					>
						Add friend!
					</Button>
				</ButtonArea>
			);
		}
		return null;
	}

	render() {
		return (
			<Fragment>
				<TableWrapper>
					<Table>
						<TableHead>
							<tr>
								<th>Name</th>
								<th colSpan="4">Building</th>
								<th>At home</th>
							</tr>
						</TableHead>
						<tbody>
						{ this.props.employees.map( employee => (
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
					<AdminButton
						onClick={ () => this.props.toggleAdminOptions() }
					>
						⚙️
					</AdminButton>
				</TableWrapper>
				{ this.renderAdminOptions() }
			</Fragment>
		);
	}
}
