import React, { Component } from 'react'

import {connect} from "react-redux";
import {deletePost} from "../actions/postActions";
import {showPost} from "../actions/postActions";
import PropTypes from "prop-types";

class DeletePost extends Component {

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
        this.props.showPost(e.target.value, "delete");
        
    }

    onSubmit(e){

        e.preventDefault();

        let postId = e.target.elements[0].value;
        
        console.log(postId);

        this.props.deletePost(postId);

    }

    render() {
        //console.log();
        
        let myComponent = this.props && this.props.data && this.props.data.component ? this.props.data.component : null;
        console.log(myComponent);

        let postId = myComponent === "delete" && this.props && this.props.data && this.props.data.showPost ? this.props.data.showPost.id : (this.props && this.props.data && this.props.data.posts ? this.props.data.posts[0].id : null);
        
        let options = this.props && this.props.data && this.props.data.posts && this.props.data.posts.length>0 ? this.props.data.posts.map((item, i) => {

            return <option key={item.id} value={item.id}>{item.title}</option>

        }) : null;

        let select = options ? <select id={"seldelete"} onChange={this.onChange} name="postId" className="custom-select mb-3">
            {options}
        </select>: null;

        let deletePost = postId ? <form onSubmit={this.onSubmit}>

            <input type="hidden" name="postId" defaultValue={postId}/>

            <input className="btn btn-outline-primary" type="submit" value="Submit" />

        </form> : null;

        return (
            <div className="container">
                <h3>Delete</h3>
                
                {select}

                {deletePost}

            </div>
            
        )
    }
}

DeletePost.propTypes = {
    deletePost: PropTypes.func.isRequired,
    showPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    data: {
        component: state.data.data.component,
        message: state.data.data.message,
        showPost: state.data.data.showPost,
        deletePost: state.data.data.deletePost,
        posts: state.data.data.posts
    },
});

export default connect(mapStateToProps, { showPost, deletePost })(DeletePost);