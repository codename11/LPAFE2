import { REGISTER, LOGIN } from "../actions/types";

const initialState = {
    auth: {
        user: null,
        access_token: null
    }
};

let myState = null;

export default function(state = initialState, action){

    switch(action.type){

        case REGISTER:
            
            let user = action.payload.user;
            let access_token = action.payload.access_token;

            myState = {
                auth: {
                    user: user,
                    access_token: access_token
                },
            };

            return myState;

        case LOGIN:
            console.log("LOGIN payload: ", action.payload);
            /*let user = action.payload.user;
            let access_token = action.payload.access_token;

            myState = {
                auth: {
                    user: user,
                    access_token: access_token
                },
            };*/

            return state;

        default:
            return state;

    }

} 