import DashComponent from '../utilities/getComponent';
import links from '../utilities/ListOfLinks';
import Styles from '../styles/dashboard.module.css';


export default function Dashboard({ parent, children, setChildren }) {
    const handleClick = (event) => {
        if (children.includes(event.target.value)) {
            setChildren(children.filter(child => child != event.target.value));
        } else {
            setChildren([...children, event.target.value])
        }
    }
    return (
        <div className={Styles.parent}>
            <div className={Styles.checkList}>
                <div className={Styles.checkListFixed}>
                    <form>
                        {
                            Object.keys(links[parent]).map(link => (
                                <div className={Styles.input}>
                                    <input type="checkbox" id={link} name={link} value={link} onClick={handleClick} checked={children.includes(link)} />
                                    <label for={link}>{link}</label>
                                </div>
                            ))
                        }
                    </form>

                </div>
            </div>
            {
                (links[parent]['index'] ? <DashComponent parent={parent} /> : '')
            }
            {
                children.map(child => <DashComponent parent={parent} child={child} />)
            }
        </div>
    )
}