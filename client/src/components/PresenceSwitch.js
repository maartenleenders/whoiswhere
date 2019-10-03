import React from "react";

export default class PresenceSwitch extends React.Component {
	render() {
		const buildingId = this.props.building;
		const isUserInBuilding = this.props.user.buildingId === buildingId;
		const newBuildingId = isUserInBuilding ? null : buildingId;

		return (
			<td
				onClick={
					() => {
						this.props.changeBuilding( this.props.user.id, newBuildingId );
					}
				}
			>
				{isUserInBuilding ? "✅" : "❌"}
			</td>
		);
	}
}
