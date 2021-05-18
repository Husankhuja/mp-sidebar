import SideBarHeader from '../SideBarHeader/index';
import Profile from '../Profile/index';
import Button from '../Button/index';
import SideBarNav from '../SideBarNav/index';
import { useState } from 'react';
import ListOfLinks from '../../public/Links/ListOfLinks';
import userData from '../../public/userData';

// styles
import Styles from './sidebar.module.css';


export default function SideBar() {
  const [display, setDisplay] = useState(false);
  return (
    <div className={display === true ? Styles.sidebar : `${Styles.sidebar} ${Styles.sidebarDisplay}`}>
      <SideBarHeader />
      <Profile userData={userData} />
      <Button />
      <SideBarNav linksArrTop={ListOfLinks} />
    </div>
  )
}