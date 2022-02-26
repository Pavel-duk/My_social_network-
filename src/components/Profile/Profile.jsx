import React from "react";
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div className= {c.content}>
            <div>
                <img src = 'https://a.d-cd.net/5e441eds-1920.jpg' alt='picture1'></img>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
        
    );
}

export default Profile;