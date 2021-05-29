import DashComponent from '../utilities/getComponent';
import Styles from '../styles/dashboard.module.css';


export default function Dashboard({ parent, children }) {
    return (
        <div className={Styles.parent}>
            <DashComponent parent={parent} />
            {
                children.map(child => <DashComponent parent={parent} child={child} />)
            }
        </div>
    )
}