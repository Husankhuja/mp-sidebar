import React from 'react';
import Styles from './button.module.css';


const Button = () => {

    return (
        <a href="#" className={Styles.button + ' active'}>Home</a>
    );
}

export default Button;