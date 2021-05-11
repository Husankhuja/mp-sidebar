import SideBarHeader from '../SideBarHeader/index';
import Profile from '../Profile/index';
import Dropdown from '../Dropdown/index';
import ListOfLinks from '../../public/Links/ListOfLinks';

// styles
import Styles from './sidebar.module.css';

{/*
Dropdown is a component that will take in a multi dimensional array of links
in order to create the links dynamically.
Links will be imported from one file in the public
folder, the file will have an array of arrays,
where each array has the first index as the title and the rest are strings 
with links names. The links will be imported and named 
appropriately. 
*/}
export default function Index() {
  const linksArrTop = [...ListOfLinks];
  return (
    <div className={Styles.sidebar}>
      <SideBarHeader />
      <Profile />
      {linksArrTop.map((linksArrSub, index) => {
        return <Dropdown key={linksArrSub[0]} links={[...linksArrSub]} />
      })}
      <div className={Styles.question}>
        <img src="./question-mark.png" alt="question" />
      </div>
    </div>
  )
}