// 然后我们把action引进来
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../app/redux/ActionCreators'
const { AsyncDisAction, IncrementAction, DecrementAction } = actionCreators

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

const mapDispatchToProps = (dispatch) => {
    // 这个是用来修改store中的state。。。。
    // 把dispatch方法挂载到props上。。。。。
    // 创建实例。这样写会消耗内存。。。。
    return {
        Increment: () => dispatch(IncrementAction()),
        Decrement: () => dispatch(DecrementAction()),
        Decrement_async: () => dispatch(AsyncDisAction())
    }
}

// connect 的时候顺序不能变。。。
export default connect(null, mapDispatchToProps)(Increment)
