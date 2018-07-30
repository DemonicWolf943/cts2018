import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class RequestsBox extends Component {
    render() {
        const { count, title, type } = this.props;
        const className = `requests-box ${this.props.selectedRequestType == type ? 'requests-box-active' : 'requests-box-inactive'}`
        return (
            <a onClick={() => this.props.changeSelectedRequestType(type)} className={className}>
                <div className='requests-box__count'>{count}</div>
                <div className='requests-box__title'>{title}</div>
                <div className='requests-box__point'></div>
            </a>
        )
    }
}

function mapStateToProps(state) {
    const { selectedRequestType } = state.requests;
    return { selectedRequestType };
}

RequestsBox = connect(mapStateToProps, actions)(RequestsBox);

export default RequestsBox;
