import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <h1>ESL Site</h1>
                <p className={styles.headerText}>Welcome to your English learning site</p>
            </div>
        </>
    );
};

export default Header;