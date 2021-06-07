import { useState } from 'react';
import { useRouter } from 'next/router'
import Sidebar from './SideBar';
import DashNav from './DashNav';
import Dashboard from './Dashboard';

import Styles from '../styles/DashboardContainer.module.css';

export default function DashboardContainer({ children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={Styles.container}>
            <DashNav Open={open} setOpen={setOpen} />
            <Sidebar Open={open} setOpen={setOpen} />
            <Dashboard>
                {children}
            </Dashboard>
            <div className="tw-mt-10"></div>
        </div>
    )
}