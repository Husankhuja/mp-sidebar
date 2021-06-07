import Styles from '../styles/dashboard.module.css';


export default function Dashboard({ children }) {
    return (
        <div className={Styles.parent}>
            {children}
        </div>
    )
}