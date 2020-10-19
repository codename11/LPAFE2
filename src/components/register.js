import React, { Component } from 'react'

import {connect} from "react-redux";
import {register} from "../actions/authActions";
import PropTypes from "prop-types";

class Register extends Component {

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
        formElements.name = forma.elements[0].value;
        formElements.email = forma.elements[1].value;
        formElements.password = forma.elements[2].value;
        formElements.password_confirmation = forma.elements[3].value;
        this.props.register(formElements);

    }

    render() {
        
        return (
            
            <div className="container">

                <h3>Register</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" onChange={this.onChange} name="name" id="name" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" onChange={this.onChange} name="email" id="email2" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" onChange={this.onChange} name="password" id="password2" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" onChange={this.onChange} name="password_confirmation" id="password_confirmation" required/>
                    </div>

                    <input className="btn btn-outline-primary" type="submit" value="Submit" />
                </form>

            </div>

        )
    }
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) =>{ 

    return ({auth: state.auth.auth,});

};

export default connect(mapStateToProps, { register })(Register);
/*
tttttttt
tttttttt@gmail.com
*/