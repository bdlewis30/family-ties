import React, { Component } from 'react';
import './FamilyMember.css';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

export class FamilyMember extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
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

export default connect(mapStateToProps)(FamilyMember)