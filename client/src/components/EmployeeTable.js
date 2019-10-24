import React, { Fragment } from "react";
import EmployeeRow from "./EmployeeRow";
import styled from "styled-components";

const TableHead = styled.thead`
  	font-size: 1em;
  	border-radius: 10px;
  	text-align: center;
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
				<div
					className="button-area"
				>
					<button
						onClick={ () => this.props.goTo( "new-employee" ) }
					>
						Add friend!
					</button>
				</div>
			);
		}
		return null;
	}

	render() {
		return (
			<Fragment>
				<div>
					<table className="employee-table" >
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
					</table>
					<button
						className="show-admin-toggle"
						onClick={ () => this.props.toggleAdminOptions() }
					>
						⚙️
					</button>
				</div>
				{ this.renderAdminOptions() }
			</Fragment>
		);
	}
}
