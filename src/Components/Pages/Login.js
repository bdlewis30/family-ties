import React, { Component } from 'react';
import '../../App.css';
import FamilyPhoto from '../../assets/placeholder-family.jpg';
import Video from '../../assets/171003B_026_2k.mp4';


export default class Login extends Component {


    render() {
        return (
            <div className="">
                <section className="header-img">
                    <img src={FamilyPhoto} alt="family header" />
                </section>
                <section className="login-container">
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className="login-button">Login</button>
                    </a>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className="login-button">Create Group</button>
                    </a>
                </section>
                <section className="video-container">
                    <video controls>
                        <source src={Video} type="video/mp4" />
                    </video>
                </section>
            </div>
        )
    }
}