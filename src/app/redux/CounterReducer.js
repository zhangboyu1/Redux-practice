// 其实这里也可以引入actionCreator的。。。。。。
export function CounterReducer(state = 0, action) {
    console.log(action)
    // retrieve the types from actionCreators
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}