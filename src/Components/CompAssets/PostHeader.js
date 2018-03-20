import React, {Component} from 'react';
import './CompAssets.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGINOUT } from '../../Reducer/redux';

export class Header extends Component {

    componentWillUnmount() {
        this.props.LOGINOUT(false)
    }

    constructor(){
        super()

        this.state = {
            user: {}
        }
    }

    render(){
        return(
            <div>
                <header></header>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { LOGINOUT })(Header)