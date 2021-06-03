import Styles from '../../styles/child.module.css';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import { fetchData } from '../../utilities/fetchMockData';
import { GrClose } from 'react-icons/gr';

export default function Dashboard({ parent, child, children = [] }) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData(parent, child).then(data => {
            setData(data);
            console.log(data);
        })
    })
    return (
        <div className={Styles.child}>
            <GrClose className={Styles.close} onClick={() => { children.filter(listChild => listChild != child) }} />
            <h2>{data ? data.title : <Skeleton />}</h2>
            <p>{data ? data.text : <Skeleton count={4} />}</p>
        </div>
    );
}