import React, { Children, useEffect } from 'react'
import SideBarHeader from '../SideBarHeader/index';
import Profile from '../Profile/index';
import Button from '../Button/index';
import SideBarNav from '../SideBarNav/index';
import ListOfLinks from '../../public/Links/ListOfLinks';
import userData from '../../public/userData';

// styles
import Styles from './sidebar.module.css';


export default function SideBar({ Open = false }) {
  return (
    <div className={Open === true ? Styles.sidebar : `${Styles.sidebar} ${Styles.sidebarDisplay}`}>
      <SideBarHeader />
      <Profile userData={userData} />
      {/* <Button /> */}
      <SideBarNav linksArrTop={ListOfLinks} />
    </div>
  )
}