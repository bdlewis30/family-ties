import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import FamilyPhoto from '../../assets/placeholder-family.jpg';
import Video from '../../assets/171003B_026_2k.mp4';
import { connect } from 'react-redux';
import { LOGINOUT } from '../../Reducer/redux';

export class Login extends Component {

    componentWillMount(){
        
    }

    componentWillUnmount() {
        this.props.LOGINOUT(false)
    }

    render() {
        return (
            <div className="">
                <header>
                    <img src={FamilyPhoto} alt="family header" />
                </header>
                <section className="login-container">
                    <Link to="/Family"><button className="login-button">Login</button></Link>
                    <Link to="/FamilyMember"><button className="login-button">Create Group</button></Link>
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

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { LOGINOUT })(Login)