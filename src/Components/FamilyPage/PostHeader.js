import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getUserinfo} from '../../Reducer/redux';

export class PostHeader extends Component {


    constructor() {
        super()

        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.props.getUserInfo().then(() => {
            axios.get(`/api/getUser/${this.props.user.id}`)
                .then(response => {
                    this.setState({ profile: response.data })
                })
        })
    }

    render() {
        return (
            <div className="post-header">
                <img src={FamilyImage} alt="family-name" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(PostHeader)