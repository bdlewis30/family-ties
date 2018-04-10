import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../Reducer/redux';
import FamilyImage from '../../assets/family.jpg';


export class AdminImg extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    familyName = (value) => {
        this.setState({
            familyName: value
        })
    }


    render() {
        return (
            <div className="upload-img-container">
            <h2>Add an Image</h2>
                <form className="family-img-upload">
                    <input type="file" name="FamilyImg" accept="image/*" />
                    <input type="submit" />
                </form>
                <section className="family-img">
                    <img src={FamilyImage} height="200px" width="100%" alt="family" />
                </section>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        user: {}
    }
}

export default connect(mapStateToProps, { getUserInfo })(AdminImg);