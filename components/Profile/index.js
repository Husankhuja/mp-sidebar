import React from 'react';
import Styles from './profile.module.css';
import { MdPerson, MdWork, MdPlaylistAddCheck, MdPeople } from "react-icons/md";
import { IconContext } from "react-icons";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Profile = ({ username, profilePic }) => {

    return (
        <div className={Styles.profile}>

            <div className={Styles.profileBorder}>
                <CircularProgressbarWithChildren
                    value={75}
                    className={Styles.progressBar}
                    styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'butt',
                        pathColor: '#FFC700',
                        trailColor: '#fff',
                    })}
                >
                    <img className={Styles.profilePic} src="/pic.png" layout="fill" />
                    {/* <img className="profile-pic" src={profilePic} /> */}

                </CircularProgressbarWithChildren>
            </div>

            <p className={Styles.username}>David</p>
            <div className={Styles.profileIcons}>
                <IconContext.Provider value={{ className: Styles.icon }} >
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