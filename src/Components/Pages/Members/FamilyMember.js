import React, {Component} from 'react';
import './FamilyMember.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGINOUT } from '../../../Reducer/redux';

export class FamilyMember extends Component {

    componentWillUnmount() {
        this.props.LOGINOUT(false)
    }

    constructor(){
        super()

        this.state = {
            members: {}
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

export default connect(mapStateToProps, { LOGINOUT })(FamilyMember)