
import { Trash, Circle, CheckCircle } from 'phosphor-react';
import styles from './Tasks.module.css';

export function Tasks(){
    return (
       <div className={styles.tasks}>
            <div className={styles.taskstatus}>
                <strong>Tarefas criadas <span> 5 </span></strong>
                <strong>Concluídas <span> 2 de 5 </span></strong>
            </div>
            <div className={styles.task}>
                <ul className={styles.tasklist}>
                    <li className={styles.taskitem}>
                        <Circle color="var(--blue)" weight='bold' cursor="pointer" size={24} />
                         <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                        <Trash color="var(--gray-300)" cursor="pointer" size={24} />
                    </li>
                    <li className={styles.taskitem}>
                        <Circle color="var(--blue)" weight='bold' cursor="pointer" size={24} />
                         <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                        <Trash color="var(--gray-300)" cursor="pointer" size={24} />
                    </li>
                    <li className={styles.taskitemCompleted}>
                        <CheckCircle color="var(--purple-dark)"  weight='fill' size={24} />
                         <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                        <Trash color="var(--gray-300)" cursor="pointer" size={24} />
                    </li>
                </ul>
            </div>
       </div>
    );
}