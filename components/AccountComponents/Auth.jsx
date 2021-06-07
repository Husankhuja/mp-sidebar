import Styles from '../../styles/child.module.css';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utilities/fetchMockData';

export default function AccountAuth() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData('account', 'auth').then(data => {
            setData(data);
            console.log(data);
        })
    })
    return (
        <div className={Styles.child}>
            <h2>{data ? data.title : <Skeleton />}</h2>
            <p>{data ? data.text : <Skeleton count={4} />}</p>
        </div>
    );
}