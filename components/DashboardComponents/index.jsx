import Styles from '../../styles/child.module.css';
import Skeleton from 'react-loading-skeleton';

export default function Child({ child }) {
    return (
        <div className={Styles.child}>
            <h2><Skeleton /></h2>
        </div>
    );
}