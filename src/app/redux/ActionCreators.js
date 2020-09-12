// It used to inserted into the dispatch......
export const IncrementAction = (text) => {
    return {
        type: 'INCREMENT',
        // ...里面还可以封装不同的东西？
        // id：
    }
}

export const DecrementAction = () => {
    return {
        type: 'DECREMENT',
    }
}

export const AsyncDisAction = () => {
    // Thunk is actually a function...
    // it can delay the dispatch... to be excuted...
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            // Here we can also use axios to fetch data.....from other end points.
            dispatch({ type: 'DECREMENT' })
        }, 2000);
    }
}


