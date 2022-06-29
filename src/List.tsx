import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import styles from './List.module.css'
import { Tasks } from './Tasks';


export function List(){

    const [tasks, setTask] = useState(['Terminar de fazer uma todo-list para o desafio']);

    const [newTaskText, setNewTaskText] = useState('')

    function handleCreatNewTaskText(event: FormEvent) {
        event.preventDefault();

        setTask([...tasks, newTaskText]);
        setNewTaskText('');
    }

    function handleNewTaskText(event){
        setNewTaskText(event.target.value);
    }
    


    return (
        <div className={styles.lists}>
            <div>
                <form  onSubmit={handleCreatNewTaskText}className={styles.newtask}>
                    <input onChange={handleNewTaskText} type="text" placeholder='Adicione uma nova tarefa' value={newTaskText} required />
                    <button type="submit">
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </form>
            </div>
            <div>
                <div className={styles.listsstatus}>
                    <strong>Tarefas criadas <span> 5 </span></strong>
                    <strong>Concluídas <span> 2 de 5 </span></strong>
                </div>
                <div className={styles.task}>
                    {tasks.map(task => {
                        return (
                            <Tasks 
                            key={task}
                            content={task}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}