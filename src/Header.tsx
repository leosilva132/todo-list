import styles from './Header.module.css';

import imgLogo from '../src/assets/logo-todolist.svg';

export function Header(){
    return (
        <div className={styles.header}>
            <img src={imgLogo} alt="" />
        </div>
    );
}