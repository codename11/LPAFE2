import { FETCH_POSTS, NEW_POST, SHOW_POST, UPDATE_POST } from "../actions/types";

const initialState = {
    data: {
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

export default function(state = initialState, action){

    switch(action.type){

        case FETCH_POSTS:
            
            myState = {
                data: {
                    message: action.payload.message,
                    posts: action.payload.posts,
                }
            };
            
            return myState;

        case NEW_POST:
        
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts : null;
            let newPost = action.payload.post;
            myState = {
                data: {
                    message: action.payload.message,
                    posts: [...posts, newPost],
                }
            };

            return myState;

        case SHOW_POST:
            
            let showPost = action.payload.post;
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts : null;

            myState = {
                data: {
                    message: action.payload.message,
                    showPost: showPost,
                    posts: [...posts],
                }
            };

            return myState;

        case UPDATE_POST:
        
            let updatedPost = action.payload.post;
            let message = action.payload.message;
            
            posts = state.data && state.data.posts && state.data.posts.length > 0 ? state.data.posts.map((item, i) => {

                return item.id === updatedPost.id ? updatedPost : item;

            }) : null;

            myState = {
                data: {
                    message: message,
                    posts: [...posts],
                }
            };

            return myState;

        default:
            return state;

    }

} 