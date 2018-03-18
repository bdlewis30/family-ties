import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGINOUT } from '../../Reducer/redux';
import './Footer.css';

export class Footer extends Component {

    componentWillUnmount() {
        this.props.LOGINOUT(false)
    }

    render() {
        return (
            <div>
                <footer>
                    <Link to="/Family" className="glyphicon glyphicon-home left"><button></button></Link>
                    <div className="center">FamilyTies</div>
                    <a href="/" className="right"><button>Logout</button></a>
                </footer>
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