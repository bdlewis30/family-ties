import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { LOGINOUT } from '../../Reducer/redux';
import './Footer.css';

export class Footer extends Component{

    componentWillUnmount() {
        this.props.LOGINOUT(false)
    }

    render(){
        let logo = <img src="../assets/family-ties-logo.png" height="200px" width="200px" alt="logo" />
        return(
            <div>
                {logo}
                <div>Logo made with <a href="https://www.designevo.com/" title="Free Online Logo Maker">DesignEvo</a></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { LOGINOUT })(Footer)