// styles
import { useState } from 'react';
import Styles from './dropdown.module.css';

export default function Index({links}) {
    const linksTitle = links[0];
    const [display, setDisplay] = useState(false);

    const handleClick = () => {
      if(display === true)
        setDisplay(false);
      else  
        setDisplay(true);
    }

    return (
      <div>
        <div className={Styles.container}>
          <div className={Styles.dropdown}>
            <h4 className={Styles.title}>{linksTitle}</h4>
            <img onClick={handleClick} src='./dropdown-icon.png' alt="dropdown-Icon" id={Styles.dropMenuImg}/>
          </div>
          <ul className={display === true ? Styles.links : Styles.links && Styles.hide}>
          {links.map((link, index) => {
            if(index > 0){
              return <li className={Styles.li} key={index}>
                            <a className={Styles.a} href="#">{link}</a>
                        </li>
            }
            })}
          </ul>
        </div>
      </div>
    )
  }