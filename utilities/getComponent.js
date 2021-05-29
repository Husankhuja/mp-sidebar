//import Home Components
import Home from '../components/HomeComponents/index';
//import Dashboard Components
import Dashboard from '../components/DashboardComponents/index';
import DashboardMessages from '../components/DashboardComponents/Messages';
import DashboardCalender from '../components/DashboardComponents/MyCalender';
import DashboardChapter from '../components/DashboardComponents/MyChapter';
import DashboardCourse from '../components/DashboardComponents/MyCourse';
import DashboardProjects from '../components/DashboardComponents/MyProjects';
import DashboardStartups from '../components/DashboardComponents/MyStartups';
import DashboardWallet from '../components/DashboardComponents/MyWallet';
//import Mentorship Components
import Mentorship from '../components/MentorshipComponents/index';
import MentorshipAssignments from '../components/MentorshipComponents/Assignments';
import MentorshipMentors from '../components/MentorshipComponents/MyMentors';
import MentorshipStatus from '../components/MentorshipComponents/Status';
//import Create Components
import Create from '../components/CreateComponents/index';
import CreateStatus from '../components/CreateComponents/Status';
//import Acount Components
import Account from '../components/AccountComponents/index';
import AccountAuth from '../components/AccountComponents/Auth';
import AccountLogout from '../components/AccountComponents/Logout';
import AccountProfile from '../components/AccountComponents/MyProfile';
import AccountUpdateProfile from '../components/AccountComponents/UpdateProfile';



const components = {
    'home': {
        'index': Home,
    },
    'dashboard': {
        'index': Dashboard,
        'messages': DashboardMessages,
        'my calendar': DashboardCalender,
        'my chapter': DashboardChapter,
        'my courses': DashboardCourse,
        'my projects': DashboardProjects,
        'my startups': DashboardStartups,
        'my wallet': DashboardWallet,
    },
    'mentorship': {
        'index': Mentorship,
        'assignments': MentorshipAssignments,
        'my mentors': MentorshipMentors,
        'status': MentorshipStatus,
    },
    'create': {
        'index': Create,
        'status': CreateStatus,
    },
    'account': {
        'index': Account,
        'my profile': AccountProfile,
        'update profile': AccountUpdateProfile,
        'auth': AccountAuth,
        'logout': AccountLogout,
    }
}

export default function DashComponent({ parent, child = 'index' }) {
    const ReturnComponent = components[parent][child];
    return <ReturnComponent parent={parent} child={child} />
}

