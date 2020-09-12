import React from 'react';
import { connect } from 'react-redux';
class NumDemo extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            < div className="NumDemo" >
                <div>
                    <h1>{this.props.num}</h1>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        num: state
    }
}

export default connect(mapStateToProps)(NumDemo)