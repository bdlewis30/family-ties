import React, { Component } from 'react';
import './Pages.css';
import FamilyImage from '../../assets/family.jpg';
import { connect } from 'react-redux'
import { GETUSER } from '../../Reducer/redux';
import axios from 'axios';

export class Posted extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: {},
            name: 'Ben Lewis',
            timestamp: '20 min',
            posts: 'It is so great that we can post anything we want through this app! I really like this app because it is easy to use. This is a link http://www.google.com'
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

    link = (post) => {
        if(post.search(/'http','https'/g)){
            let httpHttps = post.splice(post.indexOf(/'http','https'/g),1)
            return  `<a href=${httpHttps} target="_blank/>`
        }
    }

    render() {
        return (
            <div className="posted-container">
                <section className="posted-profile">
                    <div className="profileImg">{this.props.picture}</div>
                    <section className="posted-name-timestamp">
                        <div className="profileName">{this.state.name}</div>
                        <div className="time-stamp">{this.state.timestamp}</div>
                    </section>
                </section>
                <div className="posted">{this.state.posts}</div>
                <hr />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { GETUSER })(Posted);