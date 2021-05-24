import React from 'react';
import Child from '../ChildComponent/index';
import Styles from '../../styles/parentcomponent.module.css';


export default function ParentComponent({ page, children, setChildren }) {
    return (
        <div className={Styles.parent}>
            <h1>{page}</h1>
            {
                children.map(child => <Child child={child} />)
            }
        </div >
    );
}