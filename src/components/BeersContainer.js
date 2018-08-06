import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/actions';

class BeersContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getBeers());
    }



    render() {
        
        
    }
}

const mapStateToProps = function (store) {
    return {
        beers: store.beersReducer.beers,
    };
};

export default connect(mapStateToProps)(BeersContainer);