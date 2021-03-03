import React from 'react';
import styles from './login.module.css'
import {useHistory} from 'react-router';

const Login = () => {

    const history = useHistory()

    const goToSearch = () => {
        history.push('/search')
    }
    return (
        <div className={styles.Container}>
            <div className={styles.Header}>
                <img src={'./equifax_red.png'} alt="" height="100%"/>
            </div>
            <div className={styles.LoginForm}>
                <h4 className={styles.Directions}>Use your Equifax credentials to log in to the Document Portal</h4>
                <form>
                    <div className={styles.InputSection}>
                        <label for="username">Username</label>
                        <input name="username" type="text"/>
                    </div>
                    <div className={styles.InputSection}>
                        <label for="password">Password</label>
                        <input name="password" type="password"/>
                    </div>

                    <div className={styles.Footer}>
                        <button onClick={() => goToSearch()} type="button">LOGIN</button>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    )
};

export default Login;