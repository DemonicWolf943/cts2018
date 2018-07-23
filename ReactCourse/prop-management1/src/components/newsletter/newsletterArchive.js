import React, { Component } from 'react';

function ArchiveItem({title, date}) {
    return (
        <div className='arhive-item newsletter-archive__item'>
            <div className='archive-item__title'>{title}</div>
            <div className='archive-item__date'>
            { date.getMonth() + 1 }
            /
            { date.getDate() }
            /
            { date.getFullYear() - 2000 }
            </div>
        </div>
    )
}

export default class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                    {/* newsletter__items */}
                    <ArchiveItem title='sean is a dumhead' date={new Date()}/>
                    <ArchiveItem title='sean is a dumhead' date={new Date()}/>
                    <ArchiveItem title='sean is a dumhead' date={new Date()}/>
                    <ArchiveItem title='sean is a dumhead' date={new Date()}/>
                </div>
            </div>
        )
    }
}