import React, { Component } from 'react';

import NewnewsletterForm from '../auth/newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            console.log('trying to handle submit')
        })
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewnewsletterForm onSubmit={(event) => this.onSubmit(event)}/>
                HELLO
            </div>
        );
    }
}

export default NewNewsletter;