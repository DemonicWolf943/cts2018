import React, { Component } from 'react';

import { connect } from 'react-redux';

import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
                <RequestsBox title={'pending'} count={this.props.pendingCount}/>
                <RequestsBox title={'in-progress'} count={this.props.progressCount}/>
                <RequestsBox title={'complete'} count={this.props.completeCount}/>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const { requests } = state.requests
    var pendingCount = 0;
    var progressCount = 0;
    var completeCount = 0;

    requests.map(request => {
        switch(request.status) {
            case 'pending':
                pendingCount += 1;
                break;
            case 'progress':
                progressCount += 1;
                break;
            case 'complate':
                completeCount += 1;
                break;
        }
    })
        
    return {
        pendingCount,
        progressCount,
        completeCount
    }
}

export default connect(mapStateToProps)(RequestsBoxes);