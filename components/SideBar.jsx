import React, { Children, useEffect } from 'react'
import SideBarHeader from './SideBarHeader';
import Profile from './SideBarProfile';
import SideBarNav from './SideBarNav';
import ListOfLinks from '../public/Links/ListOfLinks';
import userData from '../public/userData';

// styles
import Styles from '../styles/sidebar.module.css';


export default function SideBar({ Open = false, setOpen, parent, setParent, children, setChildren }) {
  return (
    <>
      <div className={Open ? Styles.sidebar : `${Styles.sidebar} ${Styles.sidebarDisplay}`}>
        <SideBarHeader />
        <Profile userData={userData} />
        {/* <Button /> */}
        <SideBarNav linksArrTop={ListOfLinks} parent={parent} setParent={setParent} children={children} setChildren={setChildren} />
      </div>
      <div className={Open ? Styles.overlay : ''} onClick={() => { setOpen(!Open) }} >
      </div>
    </>
  )
}