import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Reducer/redux';
import FamilyImage from '../../assets/family.jpg';


export class AdminFamMembers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // famMembers: []
        }
    }

    render() {
        return (
            <div className="">
                {/* <h2>Family Members</h2> */}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        user: {},
    }
}

export default connect(mapStateToProps, { getUserInfo })(AdminFamMembers);