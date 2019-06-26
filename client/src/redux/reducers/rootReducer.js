const initialState = {
	entities: {
		users: {
			byId: {},
			allIds: [],
		}
	}
};

export default function rootReducer( state = initialState, action ) {
	return state;
};
