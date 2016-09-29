import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER:
		/* '...state' does not mutate state. 
		It returns a new array that contains old info + new info */
		return [ action.payload.data, ...state ];
	}
	return state;
} 