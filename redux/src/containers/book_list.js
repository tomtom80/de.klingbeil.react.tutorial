import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>)
    }

    renderList() {
        return this.props.books.map((book) => {
            return <li className="list-group-item">{book.title}</li>
        });
    }


}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(BooksList);