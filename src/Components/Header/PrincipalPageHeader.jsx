import React from 'react'
import { Link } from 'react-router-dom';
import styles from './PrincipalPageHeader.module.css';

const LoginRegisterHeader = (props) => {
    return (
        <nav className={styles.principalNav}>
            <Link className={`${styles.noUnder} ${styles.baner}`} to='/'>MyProjects</Link>
            <div className={styles.logRe}>
                {props.isauth !== true ?
                <React.Fragment>
                <Link className={styles.login} to='/login'>Login</Link>
                <Link className={styles.register} to='/register'>Register</Link>
                </React.Fragment>
                : <Link className={styles.register} to='/logout'>Logout</Link>}
            </div>
        </nav>
    )
}

export default LoginRegisterHeader