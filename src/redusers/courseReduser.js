export default function courseReduser(state = [], action) {
	switch(action.type) {
		case 'CREATE_COURSE':
			debugger;
			return [...state,
				Object.assign({}, action.course)
			];

		default:
			return state;
	}
}