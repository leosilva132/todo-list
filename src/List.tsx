import styles from './List.module.css'
import { Tasks } from './Tasks';

export function List(){

    return (
        <div className={styles.lists}>
            <div className={styles.listsstatus}>
                <strong>Tarefas criadas <span> 5 </span></strong>
                <strong>Concluídas <span> 2 de 5 </span></strong>
            </div>
            <div className={styles.task}>
                <Tasks />
            </div>
        </div>
    );
}