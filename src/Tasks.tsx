import { Trash, Circle, CheckCircle } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks(){

    
    return (
        <ul className={styles.tasklist}>            
            <li className={styles.taskitem}>
                <Circle weight='bold' cursor="pointer" size={32} className={styles.circle} />
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash cursor="pointer" size={32} className={styles.trash} />
            </li>
            <li className={styles.taskitemCompleted}>
                <CheckCircle color="var(--purple-dark)" cursor='pointer' weight='fill' size={24} />
                    <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash cursor="pointer" size={32} className={styles.trash} />
            </li> 
        </ul>
    );
}