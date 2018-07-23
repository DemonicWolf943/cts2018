import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

export default class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('/newsletter/new');
    }

    render() {

        const latest = {
            _id: '115',
            title: 'Happy Holidays',
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam erat nunc, vitae blandit turpis vulputate pretium. Curabitur et pretium quam. Quisque euismod neque eu ligula dignissim auctor. Proin eget nulla rhoncus, dapibus risus id, lacinia ligula. Duis ut justo ut lacus finibus placerat. Aenean a malesuada erat. Aenean luctus mi sit amet nisi feugiat feugiat. Sed risus risus, molestie ac laoreet eget, faucibus vitae ex. Fusce pulvinar lacus et elit aliquam dignissim. Sed vitae dui id erat fringilla ultricies. Nullam a quam pharetra, semper nibh nec, mattis erat. Fusce a dui a leo sagittis consequat nec sed sapien. Aliquam venenatis felis at lacus elementum sagittis. Ut tincidunt et elit non dignissim. Morbi ultricies ullamcorper lacinia.",
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }
        
        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={ () => this.handleAddNewsletter() }/>
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest history={this.props.history} {...latest}/>
            </div>
        );
    }
}