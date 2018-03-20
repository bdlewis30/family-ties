import React, {Component} from 'react';
import './FamilyMember.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGINOUT } from '../../../Reducer/redux';

export class FamilyMember extends Component {

    constructor(props){
        super(props)

        this.state = {
            members: {},
            spouse: '',
            single: ''
        }
    }

    componentWillUnmount() {
        this.props.LOGINOUT(false)
    }

    // componentDidMount(){
    //     axios.get('/api/familyMembers').then(results => {
    //         this.props.getFamilyMembers(res.data)
    //     })
    //     if(familyMember === 'couple'){
    //         return (
    //             <Link to={this.props.familyMember.id} className="family">
    //                 <section className="family">
    //                     <div>
    //                         <i className="glyphicon glyphicon-user"></i>
    //                         <i className="glyphicon glyphicon-user"></i>
    //                     </div>
    //                     <br />
    //                     {this.props.spouseOne.fname} &amp; {this.props.spouseTwo.fname}
    //                 </section>
    //             </Link>
    //         )
    //     }
    //     else if(familyMember === 'single'){
    //         return(
    //             <Link to={this.props.familyMember.id} className="family">
    //                 <section className="family">
    //                         <i className="glyphicon glyphicon-user"></i>
    //                     <br />
    //                     {this.props.fname}
    //                 </section>
    //             </Link>
    //         )
    //     }
    // }

    // familyMember = (props) => {
    //     this.setState({spouse: true})
    //     this.setState({single: false})
    // }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { LOGINOUT })(FamilyMember)