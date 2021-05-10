import React from 'react';
import './Profile.css';
import pic from './pic.png'
import { MdPerson, MdWork, MdPlaylistAddCheck, MdPeople } from "react-icons/md";
import { IconContext } from "react-icons";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Profile = ({ username, profilePic }) => {

    return (
        <div className="profile">

            <div className="profile-border">
                <CircularProgressbarWithChildren
                    value={75}
                    className="progress-bar"
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        pathColor: '#FFC700',
                        trailColor: '#fff',
                    })}
                >
                    <img className="profile-pic" src={pic} />
                    {/* <img className="profile-pic" src={profilePic} /> */}

                </CircularProgressbarWithChildren>
            </div>

            <p className="username">David</p>
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

