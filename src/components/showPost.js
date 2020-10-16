import React, { Component } from 'react'

import {connect} from "react-redux";
import {showPost} from "../actions/postActions";
import PropTypes from "prop-types";
import store from "../store";

class ShowPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: null,
            value: null
        };
        //this.props.listPosts();
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        
        this.setState({
            name: e.target.name,
            value: e.target.value
        });

        this.props.showPost(e.target.value);
    }

    render() {
        console.log(this.props);
        
        let posts = this.props.data.posts;
        let options = posts && posts.length>0 ? posts.map((item, i) => {
            
            return <option key={item.id} value={item.id}>{item.title}</option>

        }) : "";

        let select = posts && posts.length>0 ? <select id={"selshow"} name="showPost" onChange={this.onChange} className="custom-select mb-3">
            {options}
        </select> : null;

        let showPost = this.props.data.showPost;
        let post = showPost ? <div className="card">
            <div className="card-header">{showPost.title}</div>
            <div className="card-body">{showPost.body}</div>
            <div className="card-footer">{showPost.id}</div>
        </div> : null;
        
        return (
            <div className="container">

                {select}
                {post}

            </div>
            
        )
    }
}

ShowPost.propTypes = {
    showPost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    data: {
        message: state.data.data.message,
        showPost: state.data.data.showPost,
        posts: state.data.data.posts
    },
});

export default connect(mapStateToProps, { showPost })(ShowPost);