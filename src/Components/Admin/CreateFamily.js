import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GETUSER} from '../../Reducer/redux';
import AdminImg from './AdminImg'
import './Admin.css';
import AdminFamName from './AdminFamName';
import AdminFamMembers from './AdminFamMembers';

class CreateFamily extends Component{

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className="create-family-container">
                <h1>Create Family Group</h1>
                <AdminFamName />
                <AdminImg />
                <AdminFamMembers />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: {}
    }
}

export default connect(mapStateToProps, {GETUSER})(CreateFamily)