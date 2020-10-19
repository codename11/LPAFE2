import React, { Component } from 'react'

import {connect} from "react-redux";
import {login} from "../actions/authActions";
import PropTypes from "prop-types";

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       
    }

    onChange(e){

        /*this.setState({
            [e.target.name]: e.target.value,
        });*/

    }

    onSubmit(e){

        e.preventDefault();
        let forma = e.target;
        let formElements = {};
        formElements.email = forma.elements[0].value;
        formElements.password = forma.elements[1].value;
        this.props.login(formElements);

    }

    render() {
        return (
 
            <div className="container">

                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" onChange={this.onChange} name="email" id="email1" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" onChange={this.onChange} name="password" id="password1" required/>
                    </div>

                    <input className="btn btn-outline-primary" type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

/*const mapStateToProps = (state) =>{ 

    return ({auth: state.auth.auth,});

};*/

export default connect(null, { login })(Login);
/*
tttttttt
tttttttt@gmail.com
*/