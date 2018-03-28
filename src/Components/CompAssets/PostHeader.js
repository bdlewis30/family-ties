import React, {Component} from 'react';
import './CompAssets.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

export class PostHeader extends Component {


    constructor(){
        super()

        this.state = {
            user: {}
        }
    }

    render(){
        return(
            <div>
                
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(PostHeader)