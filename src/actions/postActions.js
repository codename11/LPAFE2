import { FETCH_POSTS, NEW_POST, SHOW_POST, UPDATE_POST, DELETE_POST} from "./types";

import store from "../store";

let auth = null;

export const listPosts = () => dispatch => {
    
    let url = "http://LaravelPassportApi.test/api/post";
    
    auth = store.getState().auth.auth;

    fetch(url, {
        crossDomain : true,
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + auth.access_token
        }
    })
    .then((response) => response.json())
    .then((posts) => {

        dispatch({
            type: FETCH_POSTS,
            payload: posts
        });
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

export const createPost = (data) => dispatch => {

    let url = "http://LaravelPassportApi.test/api/post";

    auth = store.getState().auth.auth;

    fetch(url, {
        method: 'POST',
        crossDomain : true,
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
            "Authorization": "Bearer " + auth.access_token
        },
        body: JSON.stringify(data)
    })
    .then((response) => {

        return response.json();

    })
    .then((post) => {
        
        dispatch({
            type: NEW_POST,
            payload: post
        });

    })
    .catch((error) => {
            console.error('Error:', error);
    });

}

export const showPost = (num, comp) => dispatch => {
    
    let url = "http://LaravelPassportApi.test/api/post/" + num;

    auth = store.getState().auth.auth;

    fetch(url, {
        headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + auth.access_token
        }
    })
    .then((response) => response.json())
    .then((post) => {
        
        let data={
            post: post,
            comp: comp
        };
        
        dispatch({
            type: SHOW_POST,
            payload: data
        });

    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

export const updatePost = (data) => dispatch => {

    let url = "http://LaravelPassportApi.test/api/post/" + data.postId;

    auth = store.getState().auth.auth;

    let obj = {
        title: data.title,
        body: data.body
    }
    
    fetch(url, {
        method: 'PATCH',
        crossDomain : true,
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
            "Authorization": "Bearer " + auth.access_token
        },
        body: JSON.stringify(obj)
    })
    .then((response) => {

        return response.json();

    })
    .then((data) => {
        console.log("Server says: ", data);
        dispatch({
            type: UPDATE_POST,
            payload: data
        });

    })
    .catch((error) => {
            console.error('Error:', error);
    });

}

export const deletePost = (postId) => dispatch => {

    let url = "http://LaravelPassportApi.test/api/post/" + postId;

    auth = store.getState().auth.auth;
    
    fetch(url, {
        method: 'DELETE',
        crossDomain : true,
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
            "Authorization": "Bearer " + auth.access_token
        },
    })
    .then((response) => {

        return response.json();

    })
    .then((data) => {
        
        dispatch({
            type: DELETE_POST,
            payload: data
        });

    })
    .catch((error) => {
            console.error('Error:', error);
    });

}
