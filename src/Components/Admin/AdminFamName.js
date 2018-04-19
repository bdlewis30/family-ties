import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFamilyName } from '../../Reducer/redux';
import axios from 'axios';


export class AdminFamilyName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            familyName: 'Family Name',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event){
        this.setState({
            familyName: event.target.value
        })
    }

    handleClick(){
        this.props.addFamilyName(this.state.familyName)
    }

    render() {
        return (
            <div className="family-name-container family-name-input">
                <h2 className="family-name">{this.state.familyName}</h2>
                <input type="text" onChange={this.handleChange} placeholder="Enter Family Name" /><br />
                <button onClick={this.handleClick}>Add Name</button>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        familyName: state.admin.familyName
    }
}

export default connect(mapStateToProps, {addFamilyName})(AdminFamilyName);