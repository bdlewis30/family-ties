import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGINOUT } from '../../Reducer/redux';
// import FamilyMembers from './Members/FamilyMember';

export class Family extends Component {


    render() {
        return (
            <div className="family-container">
            {/* <FamilyMember /> -- This will replace the placeholder info below*/}
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Dad &amp; Mom
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Randy &amp; Julie
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Michelle &amp; Jason
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Paul &amp; Camille
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Ben &amp; Nicole
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                            <i className="glyphicon glyphicon-user"></i>
                        <br />
                        David
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                            <i className="glyphicon glyphicon-user"></i>
                        <br />
                        Joseph
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Hussein &amp; Laura
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Jason &amp; Sara
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Aaron &amp; Megan
                    </section>
                </Link>
                <Link to="" className="family">
                    <section className="family">
                        <div>
                            <i className="glyphicon glyphicon-user"></i>
                            <i className="glyphicon glyphicon-user"></i>
                        </div>
                        <br />
                        Zack &amp; Heather
                    </section>
                </Link>
                <section className="margin"></section>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { LOGINOUT })(Family)