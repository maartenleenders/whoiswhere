export const NEW_USER_REQUEST = "NEW_USER_REQUEST";

export function newUserRequest( userData ) {
	return async dispatch => {
		const url = `http://localhost:3000/user`;
		const response = await fetch( url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify( userData ),
		} );
		console.log( "here: ", response );
		dispatch( {
			type: NEW_USER_REQUEST,
			userData,
			emit: false,
		} );
	}
}
