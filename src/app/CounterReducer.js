
import { actions } from './actions'
const { LOGINCHECK, LOGOUTCHECK } = actions.type;


// why saying it's predictable???
// It's because all rules has been written clearly in the reducer, about what the initail states are, and what type of states are going to return..

export function CounterReducer(state = 0, action) {
    switch (action.type) {
        case LOGINCHECK:
            return state + 1
        case LOGOUTCHECK:
            return state - 1
        default:
            return state
    }
}