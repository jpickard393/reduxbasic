import React, { Component } from 'react';
import * as ACTION_TYPES from '../Store/actions/action_types';
import * as ACTIONS from '../Store/actions/actions';
import { connect } from 'react-redux';


class Insurance extends Component {
    render() {


        return (
            <div>

            </div >
        )
    }
}


// Action Creators
const createPolicy = (name, amount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name,
            amount
        }
    }
};

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
};

const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
    }
};

// Called every time the store state changes.  It receives the enntire store state, 
// and should return an object of data this component needs
function mapStateToProps(state) {
    return {

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

    }
}

// Pass the component to the connect, so that it is conneted to the store.
export default connect(mapStateToProps, mapDispatchToProps)(Insurance);