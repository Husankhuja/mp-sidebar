import React from 'react';
import Styles from '../styles/sidebarnav.module.css';
import Dropdown from './SideBarDropdown';

{/*
Dropdown is a component that will take in a multi dimensional array of links
in order to create the links dynamically.
Links will be imported from one file in the public
folder, the file will have an array of arrays,
where each array has the first index as the title and the rest are strings 
with links names. The links will be imported and named 
appropriately. 
*/}

const SideBarNav = ({ linksArrTop, parent, setParent, children, setChildren }) => {
    return (
        <div className={Styles.sideBarNav}>
            {Object.keys(linksArrTop).map((arrayKey, index) => (
                <Dropdown
                    key={index}
                    linksTitle={arrayKey}
                    links={linksArrTop[arrayKey]}
                    parent={parent}
                    setParent={setParent}
                    children={children}
                    setChildren={setChildren}
                />
            ))}
            <div className={Styles.questionImg}>
                <img src="./question-mark.png" alt="question" />
            </div>
        </div>
    );
}

export default SideBarNav;