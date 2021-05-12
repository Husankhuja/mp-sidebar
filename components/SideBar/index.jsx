import SideBarHeader from '../SideBarHeader/index';
import Profile from '../Profile/index';
import Button from '../Button/index';
import SideBarNav from '../SideBarNav/index';
import ListOfLinks from '../../public/Links/ListOfLinks';
import userData from '../../public/userData';

// styles
import Styles from './sidebar.module.css';


export default function Index() {
  return (
    <div className={Styles.sidebar}>
      <SideBarHeader />
      <Profile userData={userData} />
      <Button />
      <SideBarNav linksArrTop={ListOfLinks} />
      <div className={Styles.question}>
        <img src="./question-mark.png" alt="question" />
      </div>
    </div>
  )
}