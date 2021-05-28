import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Styles from '../styles/dropdown.module.css';

export default function Index({ linksTitle, links, parent, setParent, children, setChildren }) {
    //Default display is none for sublinks
    const [display, setDisplay] = useState(false);

    const handleClick = (e) => {
        if (display === true) {
            setDisplay(false);
        }
        else if (display === false) {
            setDisplay(true);
        }

    }
    return (
        <div className={Styles.container}>
            <div className={linksTitle === parent
                ? Styles.dropdown + " " + Styles.active 
                : Styles.dropdown}
                onClick={handleClick}
            >
                <h4
                    className={Styles.title}
                    onClick={() => {
                        setParent(linksTitle);
                        setChildren([]);
                    }}
                >
                    {linksTitle}
                </h4>
                {links.length > 0 ?
                    <img onClick={handleClick}
                        src='./dropdown-icon.png'
                        alt="dropdown-Icon"
                        id={Styles.dropMenuImg}
                    />
                    : null}
            </div>
            <ul className={display === true ? Styles.links : Styles.links + " " + Styles.hide}>
                {links.map((link, index) => (
                    <li
                        className={Styles.li}
                        key={index}
                        onClick={() => {
                            if (children.includes(link)) {
                                setChildren(children.filter(child => child != link));
                            } else {
                                if (linksTitle != parent) {
                                    setParent(linksTitle);
                                    setChildren([link]);
                                } else {
                                    setChildren([...children, link]);
                                }
                            }
                        }}
                    >
                        <a className={Styles.a} href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}