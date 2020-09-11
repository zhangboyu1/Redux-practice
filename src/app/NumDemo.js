import React from 'react';
import { store } from '../App'

export default class NumDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        }
        store.subscribe(
            () => this.NumDemo1()
        )
    }

    NumDemo1 = () => {
        let { num } = this.state
        let _num = store.getState();
        num = _num
        this.setState({ num })
    }


    render() {
        const { num } = this.state
        return (
            < div className="NumDemo" >
                <div>
                    <h1>{num}</h1>
                </div>
            </div >
        )
    }
}
