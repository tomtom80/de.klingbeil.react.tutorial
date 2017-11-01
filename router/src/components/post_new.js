import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? ' has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field label="Title" name="title" component={this.renderField} />
                    <Field label="Tags" name="tags" component={this.renderField} />
                    <Field label="Content" name="content" component={this.renderField} />
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        )
    }
    onSubmit(values) {
        console.log(values)
    }
}



function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.tags) {
        errors.tags = "Enter some tags";
    }
    if (!values.content) {
        errors.content = "Enter some content";
    }
    return errors;
}

export default reduxForm({ validate, form: "NewPostForm" })(PostNew);