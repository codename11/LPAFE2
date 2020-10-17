import React, { Component } from 'react'

import {connect} from "react-redux";
import {updatePost} from "../actions/postActions";
import PropTypes from "prop-types";

class UpdatePost extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.defPostId = this.defPostId.bind(this);

    }

    defPostId(){



    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
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

    static getDerivedStateFromProps(nextProps, prevState){
       

        if(nextProps.data && nextProps.data.posts && nextProps.data.posts.length > 0){
            return { 
                postId: nextProps.data.posts[0].id,
                title: nextProps.data.posts[0].title,
                body: nextProps.data.posts[0].body,

            };
         }
         else{
            return null;
         };

    }

    render() {

        let options = this.props && this.props.data && this.props.data.posts && this.props.data.posts.length>0 ? this.props.data.posts.map((item, i) => {

            return <option key={item.id} value={item.id}>{item.title}</option>

        }) : null;

        let select = options ? <select id={"selupdate"} onChange={this.onChange} name="postId" className="custom-select mb-3">
            {options}
        </select>: null;

        let updateForm = <form onSubmit={this.onSubmit}>

            <input type="hidden" name="postId" id="postId" defaultValue={this.state.postId}/>

            <div className="form-group">
                <label htmlFor="title">Title: </label>
                <input type="text" className="form-control" name="title" id="title" defaultValue={this.state.title} required/>
            </div>

            <div className="form-group">
                <label htmlFor="body">Body: </label>
                <textarea className="form-control" rows="5" name="body" id="body" defaultValue={this.state.body} required></textarea>
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
};

const mapStateToProps = state => ({
    data: {
        message: state.data.data.message,
        updatePost: state.data.data.updatePost,
        posts: state.data.data.posts
    },
});

export default connect(mapStateToProps, { updatePost })(UpdatePost);
