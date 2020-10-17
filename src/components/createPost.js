import React, { Component } from 'react'

import {connect} from "react-redux";
import {createPost} from "../actions/postActions";
import PropTypes from "prop-types";

class CreatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e){

        e.preventDefault();

        let formElements = {
            title: this.state.title,
            body: this.state.body
        };
        
        console.log(formElements);

        this.props.createPost(formElements);

    }

    render() {
        
        return (
            <div className="container">
                <h3>Create</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" name="title" id="title" onChange={this.onChange} required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <textarea className="form-control" rows="5" name="body" id="body" onChange={this.onChange} required></textarea>
                    </div>

                    <input className="btn btn-outline-primary" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(CreatePost);