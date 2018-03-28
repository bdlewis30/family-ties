import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';
import axios from 'axios';

export class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            userName: '',
            userImg: ''

        }
    }

componentDidMount(){
    axios.get(`/api/getUser/${this.props.data}`).then(response => {
        this.setState({
            userName: this.props.user_name,
            userImg: this.props.user_img
        })
    })
}

    render() {
        return (
            <div>
                <header>
                    {this.state.userName}
                    {this.state.userImg}
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

export default connect(mapStateToProps)(Header)