import React, {Component} from 'react';
import {redux} from '../../Reducer/redux';
import {connect} from 'react-redux';
import {GETUSER} from '../../Reducer/redux';


export class AdminImg extends Component {
    constructor(props){
        super(props)

        this.state = {
            familyImg: ''
        }
    }

    render(){
        return(
            <div>
                <h1>AdminImg</h1>
                <form>
                    <input type="file" name="FamilyImg" accept="image/*" />
                    <input type="submit" />
                </form>
            </div>
        )
    }


} 

function mapStateToProps(state){
    return{
        users: {}
    }
}

export default connect(mapStateToProps, {GETUSER})(AdminImg);