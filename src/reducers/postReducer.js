import { FETCH_POSTS, NEW_POST, SHOW_POST, UPDATE_POST, DELETE_POST } from "../actions/types";

const initialState = {
    data: {
        component: null,
        message: null,
        posts: null,
        showPost: null,
        updatePost: null,
        deletePost: null,
        postUpdated: null,
        postDeleted: null,
    },
    auth: {
        message: null,
        access_token: null,
    }
};

let myState = null;
let posts = null;
let message = null;
let component = null;

export default function(state = initialState, action){

    switch(action.type){

        case FETCH_POSTS:
            
            message = action.payload.message;
            myState = {
                data: {
                    message: message,
                    posts: action.payload.posts,
                }
            };
            
            return myState;

        case NEW_POST:
        
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts : null;
            let newPost = action.payload.post;
            message = action.payload.message;

            myState = {
                data: {
                    message: message,
                    posts: [...posts, newPost],
                }
            };

            return myState;

        case SHOW_POST:
            
            let showPost = action.payload.post.post;
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts : null;
            message = action.payload.message;
            component = action.payload.comp;
            
            myState = {
                data: {
                    component: component,
                    message: message,
                    showPost: showPost,
                    posts: [...posts],
                }
            };

            return myState;

        case UPDATE_POST:
        
            let updatedPost = action.payload.post;
            message = action.payload.message;
            
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts.map((item, i) => {

                return item.id === updatedPost.id ? updatedPost : item;

            }) : null;

            myState = {
                data: {
                    component: state.data.component,
                    message: message,
                    posts: [...posts],
                }
            };

            return myState;

        case DELETE_POST:
    
            let deletedPost = action.payload.post;
            message = action.payload.message;
            console.log(deletedPost);
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts.filter((item, i) => {

                return item.id !== deletedPost.id;

            }) : null;

            myState = {
                data: {
                    component: state.data.component,
                    message: message,
                    posts: [...posts],
                }
            };

            return myState;

        default:
            return state;

    }

} 