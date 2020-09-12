// 然后我们把action引进来
import React from 'react';
import { actions } from './actions'
import { connect } from 'react-redux';
const { LOGINCHECK, LOGOUTCHECK } = actions.type;
class Increment extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNumValue1 = () => {
        this.props.Increment()
    }

    handleNumValue2 = () => {
        this.props.Decrement()
    }

    handleAsync = () => {
        this.props.Decrement_async()
    }

    render() {
        return (
            <div>
                <button onClick={this.handleNumValue1}>LoginCheck</button>
                <button onClick={this.handleNumValue2}>LogoutCheck</button>
                <button onClick={this.handleAsync}>Async</button>
            </div>
        )
    }
}

// 数据层：
const AsyncDis = () => {
    // Thunk is actually a function...
    // it can delay the dispatch... to be excuted...
    return dispatch => {
        setTimeout(() => {
            // Yay! Can invoke sync or async actions with `dispatch`
            dispatch({ type: LOGOUTCHECK })
        }, 2000);
    }
}


const mapDispatchToProps = (dispatch) => {
    // 这个是用来修改store中的state。。。。
    // 把dispatch方法挂载到props上。。。。。
    // 创建实例。这样写会消耗内存。。。。
    return {
        Increment: () => dispatch({ type: LOGINCHECK }),
        Decrement: () => dispatch({ type: LOGOUTCHECK }),
        Decrement_async: () => dispatch(AsyncDis())
    }
}

// Let this component connect with store....
// connect 的时候顺序不能变。。。
export default connect(null, mapDispatchToProps)(Increment)
