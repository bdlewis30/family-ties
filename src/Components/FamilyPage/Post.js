import React, { Component } from 'react';
import Posted from './Posted';

export default class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
            profile: {},
            showButton: false,
            post: '',
            showPosted: false
        }
        this.handleShowButton - this.handleShowButton.bind(this);
        this.handlePostEvent = this.handlePostEvent.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.activePost = this.activePost.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    handleShowButton(e) {
        this.setState({
            showButton: true,
        })
    }

    handlePostEvent(value){
        this.setState({
            post: value
        })
    }

    handleButtonClick(e, value){
        this.setState({
            showButton: false,
            showPosted: true
        })
    }

    activePost(e) {
        return (
            <section className="post-button-container">
                <button className="post-button" onClick={(e) => this.handleButtonClick(e.target.value, this.clearForm())}>Post</button>
            </section>
        )
    }


    clearForm(e){
        document.getElementById('active-post').value = ""
    }

    render() {
        const showButton = this.activePost()
        return (
            <div>
                <section className="post">
                    <div className="profileImg">{this.state.profile.picture}</div>
                    <textarea id="active-post" onFocus={(e) => this.handleShowButton(e.target.value)} onBlur={(e) => this.handlePostEvent(e.target.value)} name="post" rows="3" cols="10" placeholder="Share something with the family..."></textarea>
                    {this.state.showButton ? this.activePost() : null}
                </section>
               {/* {this.state.showPosted ? <Posted value={this.state.post} /> : null} */}
            </div>
        )
    }
}