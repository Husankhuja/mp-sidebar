import { useState } from 'react';
import Sidebar from '../components/SideBar';
import DashNav from '../components/DashNav';
import Dashboard from '../components/Dashboard';

import Styles from '../styles/Home.module.css';

// import sidebar as component, easily implemented into any main page
export default function Home() {
    const [open, setOpen] = useState(false);
    const [parent, setParent] = useState("home");
    const [children, setChildren] = useState([]);
    return (
        <div className={Styles.home}>
            <DashNav Open={open} setOpen={setOpen} />
            <Sidebar Open={open} setOpen={setOpen} parent={parent} setParent={setParent} children={children} setChildren={setChildren} />
            <Dashboard parent={parent} children={children} />
            <div className="tw-mt-10"></div>
        </div>
    )
}
