import { FETCH_POSTS, NEW_POST, SHOW_POST, UPDATE_POST } from "./types";

export const listPosts = () => dispatch => {
    
    let url = "http://LaravelPassportApi.test/api/post";

    fetch(url, {
        headers: {
            'Accept': 'application/json',
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

    fetch(url, {
        method: 'POST',
        crossDomain : true,
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
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

export const showPost = (num) => dispatch => {
    
    let url = "http://LaravelPassportApi.test/api/post/" + num;

    fetch(url, {
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((response) => response.json())
    .then((post) => {
        console.log(post);
        dispatch({
            type: SHOW_POST,
            payload: post
        });

    })
    .catch((error) => {
        console.error('Error:', error);
    });

}

export const updatePost = (data) => dispatch => {

    let url = "http://LaravelPassportApi.test/api/post/" + data.postId;

    let obj = {
        title: data.title,
        body: data.body
    }
    //console.log(data);
    fetch(url, {
        method: 'PATCH',
        crossDomain : true,
        headers: {
            'Content-Type': 'application/json',
            "Accept": 'application/json',
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