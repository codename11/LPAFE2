import React, { Component } from 'react'

import {connect} from "react-redux";
import {updatePost} from "../actions/postActions";
import {showPost} from "../actions/postActions";
import PropTypes from "prop-types";

class UpdatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){

        this.setState({
            [e.target.name]: e.target.value,
        });
        this.props.showPost(e.target.value, "update");
        
    }

    onSubmit(e){

        e.preventDefault();

        let formElements = {
            postId: e.target.elements[0].value,
            title: e.target.elements[1].value,
            body: e.target.elements[2].value
        };
        
        console.log(formElements);

        this.props.updatePost(formElements);

    }

    render() {
        //console.log();
        
        let myComponent = this.props && this.props.data && this.props.data.component ? this.props.data.component : null;
        console.log(myComponent);

        let title = myComponent === "update" && this.props && this.props.data && this.props.data.showPost ? this.props.data.showPost.title : (this.props && this.props.data && this.props.data.posts ? this.props.data.posts[0].title : null);
        let body = myComponent === "update" && this.props && this.props.data && this.props.data.showPost ? this.props.data.showPost.body : (this.props && this.props.data && this.props.data.posts ? this.props.data.posts[0].body : null);
        let postId = myComponent === "update" && this.props && this.props.data && this.props.data.showPost ? this.props.data.showPost.id : (this.props && this.props.data && this.props.data.posts ? this.props.data.posts[0].id : null);

        let options = this.props && this.props.data && this.props.data.posts && this.props.data.posts.length>0 ? this.props.data.posts.map((item, i) => {

            return <option key={item.id} value={item.id}>{item.title}</option>

        }) : null;

        let select = options ? <select id={"selupdate"} onChange={this.onChange} name="postId" className="custom-select mb-3">
            {options}
        </select>: null;

        let updateForm = <form onSubmit={this.onSubmit}>

            <input type="hidden" name="postId" id="postId" defaultValue={this.state.postId ? this.state.postId : postId}/>

            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" className="form-control" name="title" id="title2" defaultValue={title} required/>
            </div>

            <div className="form-group">
                <label htmlFor="body">Body: </label>
                <textarea className="form-control" rows="5" name="body" id="body2" defaultValue={body} required></textarea>
            </div>

            <input className="btn btn-outline-primary" type="submit" value="Submit" />

        </form>;

        return (
            <div className="container">
                <h3>Update</h3>
                {select}

                {updateForm}

            </div>
            
        )
    }
}

UpdatePost.propTypes = {
    updatePost: PropTypes.func.isRequired,
    showPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    data: {
        component: state.data.data.component,
        message: state.data.data.message,
        showPost: state.data.data.showPost,
        updatePost: state.data.data.updatePost,
        posts: state.data.data.posts
    },
});

export default connect(mapStateToProps, { showPost, updatePost })(UpdatePost);
