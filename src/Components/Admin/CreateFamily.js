import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserInfo, familyImage} from '../../Reducer/redux';
import AdminImg from './AdminImg'
import './Admin.css';
import AdminHeader from './AdminHeader';
import AdminFamName from './AdminFamName';
import AdminFamMembers from './AdminFamMembers';

class CreateFamily extends Component{

    constructor(props){
        super(props)

        this.state = {
            family_name: '',
            family_image: ''
        }
    }

adminSaveGroup = () => {
    const body = {
        family_name: this.state.family_name,
        family_image: this.state.family_image
    }
    axios.post('/api/group', body).then(res => {

    })
}

    render(){
        return(
            <div className="create-family-container">
                <AdminHeader />
                <h1>Create Family Group</h1>
                <AdminFamName />
                <AdminImg />
                {/* <AdminFamMembers /> */}
                {/* <button onClick={this.adminSaveGroup}>Save</button> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user,
        uploadedImgCloudinaryUrl: '',
        familyName: ''
    }
}

export default connect(mapStateToProps, {getUserInfo, familyImage})(CreateFamily)