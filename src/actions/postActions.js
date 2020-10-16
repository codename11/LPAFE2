import { FETCH_POSTS, NEW_POST, SHOW_POST } from "./types";

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