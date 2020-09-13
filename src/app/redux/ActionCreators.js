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
    return {
        type: 'DECREMENT_ASYNC',
    }
}

export const AsyncFetchAction = () => {
    return {
        type: 'FETCHDATA_ASYNC',
        payload: {
            url: `https://api.darksky.net/forecast/d5a7dda54f011a00ba9ac7d784cc4581/48.8587,2.3429`,

        }
    }
}
