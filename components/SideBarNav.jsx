import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Styles from '../styles/sidebarnav.module.css';
import Dropdown from './SideBarDropdown';
import { BsQuestionCircleFill } from 'react-icons/bs';


const SideBarNav = ({ ListOfLinks }) => {
    const router = useRouter();
    const url = router.pathname;
    let parent, child;
    if (url == '/') {
        parent = 'home';
    } else {
        parent = Object.keys(ListOfLinks).find(element => {
            child = Object.keys(ListOfLinks[element]).find(subElement => ListOfLinks[element][subElement].link == url)
            return child;
        })
    }

    const [question, setQuestion] = useState(false);
    return (
        <div className={Styles.sideBarNav}>
            {Object.keys(ListOfLinks).map((element, index) => (
                <Dropdown
                    key={index}
                    linksTitle={element}
                    links={ListOfLinks[element]}
                    parent={parent}
                    child={child}
                />
            ))}
            <div className={Styles.questionImg}>
                <BsQuestionCircleFill onClick={() => { setQuestion(!question) }} />
                <div className={`${Styles.questionMenu} ${!question ? Styles.hide : ''}`}>
                    <ul>
                        <li>Get Help</li>
                        <li>Provide Feedback</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBarNav;