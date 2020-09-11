// 然后我们把action引进来
import React from 'react';
import { actions } from './actions'
import { store } from '../App'

const { LOGINCHECK, LOGOUTCHECK } = actions.type;

export default class Increment extends React.Component {
    constructor(props) {
        super(props);
    }


    handleNumValue1 = () => {
        store.dispatch({ type: LOGINCHECK })
        // so without thunk, action must be plain objects.
        console.log(LOGINCHECK)
    }


    handleNumValue2 = () => {
        store.dispatch({ type: LOGOUTCHECK })
    }


    AsyncDis = () => {
        // Thunk is actually a function...
        // it can delay the dispatch... to be excuted...
        return dispatch => {
            setTimeout(() => {
                // Yay! Can invoke sync or async actions with `dispatch`
                store.dispatch({ type: LOGOUTCHECK })
            }, 2000);
        }
    }

    handleAsync = () => {
        store.dispatch(this.AsyncDis())
    }

    render() {
        //这个相当于一个public property了。。虽然JS中没有public和private的概念但是通过这种方式也可以
        // dasds
        return (
            <div >
                <button onClick={this.handleNumValue1}>LoginCheck</button>
                <button onClick={this.handleNumValue2}>LogoutCheck</button>
                <button onClick={this.handleAsync}>Async</button>
            </div>
        )
    }
}