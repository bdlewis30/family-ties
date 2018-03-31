import React, {Component} from 'react';


export default class Post extends Component {

    constructor(props){
        super(props)

        this.state = {
            profile: {}
        }
    }

    render(){
        return (
            <div>
                <section className="comment">
                    <div className="profileImg">{this.state.profile.picture}</div>
                    <textarea name="post" rows="3" cols="10" placeholder="Share something with the family..."></textarea>
                </section>
            </div>
        )
    }
}