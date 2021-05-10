import React from 'react';
import './Profile.css';
import profilePic from './profilePic.svg';
import { MdPerson, MdWork, MdPlaylistAddCheck, MdPeople } from "react-icons/md";
import { IconContext } from "react-icons";


const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-border">
                <img className="profile-pic" src={profilePic} />
            </div>
            <div className="profile-icons">
                <IconContext.Provider value={{ className: "icon" }} >
                    <MdPerson />
                    <MdWork />
                    <MdPlaylistAddCheck />
                    <MdPeople />
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Profile;