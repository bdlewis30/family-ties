import React, { Component } from 'react';
import '../../App.css';

export default class NotFamily extends Component{

    render(){
        return(
            <div className="loginFail">
                <h1 className="">Sorry, we were unable to verify that you are family.</h1>
                <p className="">You can try loggin in again or contact the administrator for assistence.</p>
            </div>
        )
    }
}