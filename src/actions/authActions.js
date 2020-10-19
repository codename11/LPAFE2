import { REGISTER, LOGIN} from "./types";

export const register = (data) => dispatch => {

    let url = "http://LaravelPassportApi.test/api/register";

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
    .then((data) => {
        
        dispatch({
            type: REGISTER,
            payload: data
        });

    })
    .catch((error) => {
            console.error('Error:', error);
    });

}

export const login = (data) => dispatch => {

    let url = "http://LaravelPassportApi.test/api/login";

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
    .then((data) => {
        console.log(data);
        dispatch({
            type: LOGIN,
            payload: data
        });

    })
    .catch((error) => {
            console.error('Error:', error);
    });

}