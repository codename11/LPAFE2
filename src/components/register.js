import React, { Component } from 'react'

class Register extends Component {

    constructor() {
        super();

        this.register = this.register.bind(this);
    }
    
    async register(e){

        e.preventDefault();
    
        let forma = e.target;
        let formElements = {};
        formElements.name = forma.elements[0].value;
        formElements.email = forma.elements[1].value;
        formElements.password = forma.elements[2].value;
        formElements.password_confirmation = forma.elements[3].value;
    
        let url = "http://LaravelPassportApi.test/api/register";
    
        await fetch(url, {
            method: 'POST',
            crossDomain : true,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formElements)
        })
        .then((response) => {

            return response.json();

        })
        .then((data) => {

            console.log(data);
        
        })
        .catch((error) => {
                console.error('Error:', error);
        });
    
    }

    render() {
        return (
 
            <form onSubmit={this.register}>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" id="name" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" id="email2" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password" id="password2" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" required/>
                </div>

                <input className="btn btn-outline-primary" type="submit" value="Submit" />
            </form>

        )
    }
}

export default Register;