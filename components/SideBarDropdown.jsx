import React, { useState } from 'react';
import Styles from '../styles/dropdown.module.css';

export default function Index({ linksTitle, links, parent, setParent, children, setChildren }) {
    //Default display is none for sublinks
    const [display, setDisplay] = useState(false);
    const dropdownStyles = linksTitle === parent ? Styles.dropdown + " " + Styles.active : Styles.dropdown;
    const ulStyles = display === true ? Styles.links : Styles.links + " " + Styles.hide;
    const liStyles = (index) => `${index == 0 || index == links.length - 1 ? Styles.edge : ''} ${Styles.li} `;
    const spanStyles = (link) => `${Styles.a} ${children.includes(link) ? Styles.active : ''}`;
    const handleElementClick = () => {
        if (display === true) {
            setDisplay(false);
        }
        else if (display === false) {
            setDisplay(true);
        }
        if (linksTitle == 'home') {
            setParent(linksTitle);
        }
    }
    const handleSubElementClick = (link) => {
        if (children.includes(link)) {
            setChildren(children.filter(child => child != link));
        } else {
            if (linksTitle != parent) {
                setParent(linksTitle);
                setChildren([link]);
            } else {
                if ((children && !links[children[0]].stackable) || !links[link].stackable) {
                    setChildren([link]);
                } else {
                    setChildren([...children, link]);
                }
            }
        }
    }
    return (
        <div className={Styles.container}>
            <div className={dropdownStyles} onClick={handleElementClick}>
                <h4 className={Styles.title}>{linksTitle}</h4>
                {Object.keys(links).length > 0 ? <img src='./dropdown-icon.png' alt="dropdown-Icon" id={Styles.dropMenuImg} /> : null}
            </div>
            {Object.keys(links).length > 0 ?
                <ul className={ulStyles}>
                    {Object.keys(links).map((link, index) => (
                        <li className={liStyles(index)} key={index} onClick={() => handleSubElementClick(link)} >
                            <span className={spanStyles(link)}>{links[link].name}</span>
                        </li>
                    ))}
                </ul> : ''}
        </div>
    )
}