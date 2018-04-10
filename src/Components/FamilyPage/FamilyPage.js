import React, { Component } from 'react';
import './FamilyPage.css';
import {connect} from 'react-redux'
import {getUserInfo} from '../../Reducer/redux';
import axios from 'axios';
import Posted from './Posted';
import FamilyImage from '../../assets/family.jpg';
import PhotoVideoComment from '../FamilyPage/PhotoVideoComment';
import Post from '../FamilyPage/Post';

export class FamilyPage extends Component{

    componentDidMount() {
        this.props.getUserInfo().then(() => {
            axios.get(`/api/getUser/${this.props.user.id}`)
                .then(response => {
                    this.setState({ profile: response.data })
                })
        })
    }

    render(){
        return(
            <div className="post-container">
               <section className="post-header">
                    <img src={FamilyImage} alt="family-name" />
                </section>
                <PhotoVideoComment />
                <Post />
                <Posted />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUserInfo})(FamilyPage);