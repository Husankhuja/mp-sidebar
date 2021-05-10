import Profile from '../Profile/index'
import Dropdown from '../Dropdown/index'
import DashboardLinks from '../../public/dashboard'
import MentorshipLinks from '../../public/mentorship'

// styles
import Styles from './sidebar.module.css';

{/*
Dropdown is a component that will take in an array of links
in order to create the links dynamically.
Links will be imported from a seperate file in the public
folder, each file will have a single array of strings,
where the first index is the title and the rest are strings 
with links names. The links will be imported and named 
appropriately. 
*/}
export default function Index() {
    return (
      <div className={Styles.sidebar}>
        <Profile />
        <Dropdown links={[...DashboardLinks]}/>
        <Dropdown links={[...MentorshipLinks]}/>
      </div>
    )
  }