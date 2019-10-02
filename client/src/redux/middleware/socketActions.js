/**
 * This middleware will emit actions that have a { emit: true } property in the action object trough the socket.
 * The socket emits will be flagged with a "clientReduxAction" message.
 *
 * @example
 * The action { type: "FOO", payload: "bar", emit: true }
 * will be sent as "clientReduxAction" with the action as payload through the websocket.
 *
 * @param {*} socket The websocket to send the action to.
 *
 * @return {function(*): function(*): Function} The curried middleware functionality.
 */
const socketActions = socket => store => next => action => {
	if ( action.emit ) {
		socket.emit( action.type, action );
	}
	return next( action );
};

export default socketActions;
