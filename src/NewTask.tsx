import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask(){
    
    return (
        <div>
            <form className={styles.newtask} action="submit">
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
}