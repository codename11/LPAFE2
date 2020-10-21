import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import {connect} from "react-redux";
import {listPosts} from "../actions/postActions";
import PropTypes from "prop-types";

class ListPosts extends Component {

    constructor(props) {
        super(props);

        this.props.listPosts();
    }

    render() {
        //console.log("list: ", this.props);
        let posts = this.props && this.props.data && this.props.data.posts && this.props.data.posts.length>0 ? <Carousel>{this.props.data.posts.map((item, i) => {

            return <div className="card cardWide" key={i}>
                <div className="card-header text-center">{item.title}</div>
                <div className="card-body">{item.body}</div>
                <div className="card-footer">{"No. "+item.id}</div>
            </div>;

        })}</Carousel> : null;

        
        return (
            
            <span>
                {posts}
            </span>
    
        );
        
    }
}

ListPosts.propTypes = {
    listPosts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    data: {
        message: state.data.data.message,
        posts: state.data.data.posts,
    },
});

export default connect(mapStateToProps, { listPosts })(ListPosts);
