import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUserInfo} from '../../Reducer/redux';
import './Admin.css';
import axios from 'axios';

export class AdminHeader extends Component {

    constructor(props){
        super(props)

        this.state = {
            user: {}
        }
    }

componentDidMount(user_id){
    this.props.getUserInfo()
}

    render() {
        const user = this.props.user
        return (
            <div className="admin-header">
                <header>
                    <img className="profile-img" src={user.user_img} alt="user" />
                    <div>{user.user_name}</div>
                </header>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(AdminHeader)