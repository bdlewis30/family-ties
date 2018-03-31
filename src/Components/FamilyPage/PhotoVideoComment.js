import React from 'react';
export default function PhotoVideoComment() {
    return (
        <div>
            <section className="photoVideoComment">
                <button><span className="glyphicon glyphicon-camera"></span> Photo</button>
                <button><span className="glyphicon glyphicon-facetime-video"></span> Video</button>
                <button><span className="glyphicon glyphicon-comment"></span> Comment</button>
            </section>
        </div>
    )
}