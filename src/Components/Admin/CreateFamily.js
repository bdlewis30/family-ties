import React, {Component} from 'react';
import {connect} from 'react-redux';
import {GETUSER} from '../../Reducer/redux';
import AdminImg from './AdminImg'

class CreateFamily extends Component{

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <AdminImg />
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