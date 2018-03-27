import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GETUSER, addFamilyMembers } from '../../Reducer/redux';
import FamilyImage from '../../assets/family.jpg';


export class AdminFamMembers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            famMembers: []
        }
    }

    familyName = (value) => {
        this.setState({
            familyName: value
        })
    }


    render() {

        let { famMembers } = this.props

        return (
            <div className="">
                <h2>Family Members</h2>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: {},
        familyMembers: state.familyMembers
    }
}

export default connect(mapStateToProps, { GETUSER, addFamilyMembers })(AdminFamMembers);