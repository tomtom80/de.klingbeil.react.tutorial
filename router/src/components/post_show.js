import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { Link } from 'react-router-dom';

class PostShow extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    render() {
        const post = this.props.post;

        if (!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
                <h3>{post.title}</h3>
                <h6>{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    };
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);