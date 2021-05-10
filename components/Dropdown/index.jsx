// styles
import Styles from './dropdown.module.css';

export default function Index({links}) {
    const linksTitle = links[0];
    return (
      <div>
        <div className={Styles.container}>
          <div className={Styles.dropdown}>
            <h4 className={Styles.title}>{linksTitle}</h4>
            <button>btn</button>
          </div>
          <ul className={Styles.links}>
            {links.map((link, index) => {
                if(index > 0)
                    return <li className={Styles.li} key={index}>
                                <a className={Styles.a} href="#">{link}</a>
                            </li>
            })}
          </ul>
        </div>
      </div>
    )
  }