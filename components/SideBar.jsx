import React from 'react'
import SideBarHeader from './SideBarHeader';
import Profile from './SideBarProfile';
import SideBarNav from './SideBarNav';
import ListOfLinks from '../utilities/ListOfLinks';
import userData from '../public/userData';

// styles
import Styles from '../styles/sidebar.module.css';


export default function SideBar({ Open = false, setOpen }) {
    return (
        <div className={Open ? Styles.sidebarContainer + ' tw-shadow-md' : `${Styles.sidebarContainer} ${Styles.hide}`}>
            <div className={Open ? Styles.sidebar : `${Styles.sidebar} ${Styles.hide}`}>
                <SideBarHeader />
                <Profile userData={userData} />
                <SideBarNav ListOfLinks={ListOfLinks} />
            </div>
            <div className={Open ? Styles.overlay : ''} onClick={() => { setOpen(!Open) }} >
            </div>
        </div>
    )
}