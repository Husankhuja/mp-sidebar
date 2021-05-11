import React from 'react';
import Styles from './sidebarheader.module.css';


const SideBarHeader = () => {

    return (
        <div className={Styles.sideBarHeader}>
            <img src="/logo.svg" className={Styles.logo} />
            <h2 className={Styles.title}>Minority Programmers</h2>
        </div>
    );
}

export default SideBarHeader;