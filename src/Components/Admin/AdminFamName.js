import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GETUSER, familyName } from '../../Reducer/redux';
import FamilyImage from '../../assets/family.jpg';


export class AdminImg extends Component {
    constructor(props) {
        super(props)

        this.state = {
            familyName: 'Family Name'
        }
    }

    familyName = (value) => {
        this.setState({
            familyName: value
        })
    }


    render() {
        let { familyName } = this.props
        return (
            <div className="family-name-container family-name-input">
                <h2 className="family-name">{this.state.familyName}</h2>
                <input type="text" onChange={(e) => this.familyName(e.target.value)} placeholder="Family Name" /><br />
                <button className="family-name-button" onClick={() => familyName(this.state.familyName)}>Enter</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: {},
        familyName: state.familyName
    }
}

export default connect(mapStateToProps, { GETUSER, familyName })(AdminImg);