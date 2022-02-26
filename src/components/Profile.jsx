import React from "react";
import c from './Profile.module.css';

const Profile = () => {
    return (
        <div className= {c.content}>
            <div>
                <img src = 'https://a.d-cd.net/5e441eds-1920.jpg' alt='picture1'></img>
            </div>
            <div>
                ava
            </div>
                <div>
                     my posts
                    <div>
                        new posts
                    </div>
                    <div className = {c.posts}>
                        <div className = {c.post}>
                            post1
                        </div>
                        <div className = {c.post}>
                            post2
                        </div>
                    </div>
                </div>
        </div>
        
    );
}

export default Profile;