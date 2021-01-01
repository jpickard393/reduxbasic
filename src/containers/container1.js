import React, { Component } from 'react';
import * as ACTION_TYPES from '../Store/actions/action_types';
import * as ACTIONS from '../Store/actions/actions';
import { connect } from 'react-redux';


class Container1 extends Component {
    render() {
        const jobRef = "se.12345.00";

        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1, this.props.jobRef)}> Get State</button>
                <button onClick={() => this.props.action1()}> Dispatch Action 1</button>
                <button onClick={() => this.props.action2()}> Dispatch Action 2</button>
                <button onClick={() => this.props.action_creater1()}>Dispatch Action Creater 1</button>
                <button onClick={() => this.props.action_creater2()}>Dispatch Action Creater 2</button>
                <button onClick={() => this.props.action_creater3(jobRef)}>Dispatch JobRef</button>
            </div >
        )
    }
}

// Called every time the store state changes.  It receives the enntire store state, 
// and should return an object of data this component needs
function mapStateToProps(state) {
    return {
        stateprop1: state.stateprop1,
        jobRef: state.jobRef
    }
}

/* Can be a parameter or a funnction
If a function will be called once on component creation.  
receives Dispatch as an argument, and should returnn an object that will use dispatch
to dispatch actions.

If an object, it will automatically dispatch its action when called.
*/
function mapDispatchToProps(dispatch) {
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creater1: () => dispatch(ACTIONS.success()),
        action_creater2: () => dispatch(ACTIONS.failure()),
        action_creater3: (text) => dispatch(ACTIONS.user_input(text))
    }
}

// Pass the component to the connect, so that it is conneted to the store.
export default connect(mapStateToProps, mapDispatchToProps)(Container1);