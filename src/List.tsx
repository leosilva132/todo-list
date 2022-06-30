import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, SetStateAction, useState } from 'react';
import { Tasks } from './Tasks';

import styles from './List.module.css';
import { Notask } from './Notask';

interface Task {
    id: number;
    title: string;
    Completed: boolean;
}

export function List(){

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreatNewTaskText(event: FormEvent) {
        event.preventDefault();
        const newTask ={
            id: Math.floor(Math.random() * 1000),
            title: newTaskText,
            Completed: false
        }

        setTasks(prevState => ([...prevState, newTask]));
        setNewTaskText('');
    }

    function handleNewTaskText(event: ChangeEvent<HTMLInputElement>){
        setNewTaskText(event.target.value);
    }

    function toggleTaskCompletion(id: number){
        const newTask = tasks.map(task => task.id === id ? {
            ...task, Completed: !task.Completed

        } : task)
        
        setTasks(newTask);
    }

    function handleDeleteTask(id: number){
        const deleteTask = tasks.filter(task => task.id !== id);

        setTasks(deleteTask)
    }

    const countTasks = tasks.length;
    const countTasksCompleted = tasks.filter(tasks => tasks.Completed).length;

    console.log(tasks)
        
    return (
        <div className={styles.lists}>
            <div>
                <form  onSubmit={handleCreatNewTaskText}className={styles.newtask}>
                    <input className={styles.inputTask} onChange={handleNewTaskText} type="text" placeholder='Adicione uma nova tarefa' value={newTaskText} required />
                    <button type="submit">
                        Criar
                        <PlusCircle size={16} />
                    </button>
                </form>
            </div>
            <div>
                <div className={styles.listsstatus}>
                    <strong>Tarefas criadas <span>{countTasks}</span></strong>
                    <strong>Concluídas <span> {countTasksCompleted} de {countTasks} </span></strong>
                </div>
                <div className={styles.task}>
                    <ul> 
                        {tasks.length >= 1 ?  tasks.map(task => {
                            return (
                                <Tasks 
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                Completed={task.Completed} 
                                toggleTaskCompletion={toggleTaskCompletion}
                                deletedTask={handleDeleteTask}/>
                                )
                        }) : <Notask />}
                    </ul>
                </div>
            </div>
        </div>
    );
}