import React, { Component } from 'react';
import './Pages.css';
import Posted from './Posted';
import FamilyImage from '../../assets/family.jpg';
import {connect} from 'react-redux'
import {GETUSER} from '../../Reducer/redux';
import axios from 'axios';

export class Posts extends Component{

    constructor(props){
        super(props)

        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        this.props.GETUSER().then(() => {
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
                <section className="photoVideoComment">
                    <div><button><span className="glyphicon glyphicon-camera"></span> Photo</button></div>
                    <div><button><span className="glyphicon glyphicon-facetime-video"></span> Video</button></div>
                    <div><button><span className="glyphicon glyphicon-comment"></span> Comment</button></div>
                </section>
                <section className="comment">
                    <div className="profileImg">{this.state.profile.picture}</div>
                    <textarea name="post" rows="3" cols="10" placeholder="Share something with the family..."></textarea>
                </section>
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
export default connect(mapStateToProps, {GETUSER})(Posts);