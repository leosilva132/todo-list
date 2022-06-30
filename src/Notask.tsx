
import { ClipboardText } from 'phosphor-react';
import styles from './Notask.module.css'

export function Notask() {
    return (
        <div className={styles.notask}>
            <ClipboardText size={56} />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}