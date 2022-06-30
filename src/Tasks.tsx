import { Trash, Circle, CheckCircle, IconWeight, IconProps } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css';

interface TasksProps {
    title: string;
    Completed: boolean;
    id: number;
    toggleTaskCompletion: Function;
    deletedTask: Function;
}

export function Tasks({ title, Completed, id, toggleTaskCompletion, deletedTask }: TasksProps){

    const [weight, setWeight] = useState<IconWeight>('bold');
    const [color, setColor] = useState<string>('var(--purple-dark)');

    return (
        
        <li className={Completed ? styles.taskitemCompleted : styles.taskitem }>
                <div onClick={() => toggleTaskCompletion(id)}>
                    { <span>{Completed ? <CheckCircle 
                        color={color} 
                        cursor='pointer' 
                        weight='fill'
                        size={24}
                        onMouseEnter={() => setColor('var(--purple)')}
                        onMouseLeave={() => setColor('var(--purple-dark)')}
                        />
                        : <Circle 
                        color="var(--blue)"
                        weight={weight}
                        cursor="pointer" 
                        size={24} 
                        className={styles.circle} 
                        onMouseEnter={() => setWeight('duotone')}
                        onMouseLeave={() => setWeight('bold')}
                        />}
                        </span>
                    }
                </div>       
                <span className={styles.taskText}>{title}</span>
                <Trash cursor="pointer" 
                size={32} 
                className={styles.trash}
                onClick={() => deletedTask(id)} />
            </li>
    );
}


