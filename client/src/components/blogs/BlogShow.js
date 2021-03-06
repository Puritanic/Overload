import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';

class BlogShow extends Component {
	componentDidMount() {
		this.props.fetchBlog(this.props.match.params._id);
	}

	renderImage = () => {
		if (this.props.blog.imageUrl) {
			return (
				<img
					src={`https://s3.eu-central-1.amazonaws.com/signal-in-the-static/${
						this.props.blog.imageUrl
					}`}
					alt="Post hero"
				/>
			);
		}
	};

	render() {
		if (!this.props.blog) {
			return '';
		}
		const { title, content } = this.props.blog;

		return (
			<div>
				<h3>{title}</h3>
				{this.renderImage()}
				<p>{content}</p>
			</div>
		);
	}
}

function mapStateToProps({ blogs }, ownProps) {
	return { blog: blogs[ownProps.match.params._id] };
}

export default connect(
	mapStateToProps,
	{ fetchBlog }
)(BlogShow);
