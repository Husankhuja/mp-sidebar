import Styles from '../../styles/child.module.css';

export default function Child({ child }) {
    return (
        <div className={Styles.child}>
            <h2>{child}</h2>
        </div>
    );
}