import React, { useState } from 'react';
import Link from 'next/link';
import Styles from '../styles/dropdown.module.css';

export default function Index({ linksTitle, links, parent, child }) {
    //Default display is none for sublinks
    const [display, setDisplay] = useState(linksTitle == parent);
    const dropdownStyles = linksTitle == parent ? Styles.dropdown + " " + Styles.active : Styles.dropdown;;
    const ulStyles = display === true ? Styles.links : Styles.links + " " + Styles.hide;
    const liStyles = (index) => `${index == 0 || index == links.length - 1 ? Styles.edge : ''} ${Styles.li} `;
    const aStyles = (link) => `${Styles.a} ${link == child ? Styles.active : ''}`;


    return (
        <div className={Styles.container}>
            {
                Object.keys(links).length == 0 ?
                    <div className={dropdownStyles} >
                        <h4 className={Styles.title}><Link href={'/'}>{linksTitle}</Link></h4>
                    </div> :
                    <div className={dropdownStyles} onClick={() => setDisplay(!display)}>
                        <h4 className={Styles.title}>{linksTitle}</h4>
                        <img src='/dropdown-icon.png' alt="dropdown-Icon" id={Styles.dropMenuImg} />
                    </div>
            }
            {Object.keys(links).length > 0 ?
                <ul className={ulStyles}>
                    {Object.keys(links).map((link, index) => (
                        <li className={liStyles(index)} key={index} >
                            <Link href={links[link].link}>
                                <a className={aStyles(link)}>{links[link].name}</a>
                            </Link>
                        </li>
                    ))}
                </ul> : ''}
        </div>
    )
}