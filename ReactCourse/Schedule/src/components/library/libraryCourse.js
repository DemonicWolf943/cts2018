import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';

export default class LibraryCourse extends Component {
	render() {
		return (
			<div className="library-course">
				<div className="library-course__title-check">
					<label className="library-course__title">Problem Solving</label>
					{Icon('fas fa-check', 'library-course__icon')}
				</div>
				<Arrow className="library-course__arrow" />
				<Action className="library-course__action" />
				<div>
					<label>Course Description</label>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare felis ac ultrices elementum. Fusce placerat vestibulum tellus, sit amet eleifend justo volutpat in. Vestibulum in quam vehicula nibh maximus dictum vel at tortor.</p>
				</div>
			</div>
		); 
	}
}