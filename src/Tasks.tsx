import { Trash, Circle, CheckCircle, IconWeight } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css';

interface TasksProps {
    content: string;
}

export function Tasks({ content }: TasksProps){

    const [CircleWeight, setCircleWeight] = useState<IconWeight>("bold");
    const [CheckCicleColor, setCheckCicleColor] = useState<IconWeight>("var(--purple-dark)");
    const [isComplete, setIsComplete] = useState(false);
    const [icon, setIcon] = useState(<Circle 
        color="var(--blue)"
         weight={CircleWeight}
         cursor="pointer" 
         size={24} 
         className={styles.circle} 
        />);
  
    function handleCompleteTask(){
        if(isComplete == false){
            setIsComplete(true);
            setIcon(<CheckCircle 
                color={CheckCicleColor} 
                cursor='pointer' 
                weight='fill'
                size={24} 
                onMouseOver={() => setCheckCicleColor('var(--purple)')}
                onMouseLeave={() => setCheckCicleColor('var(--purple-dark)')}/>)
        } else {
            setIsComplete(false);
            setIcon(<Circle 
                color="var(--blue)"
                 weight={CircleWeight}
                 cursor="pointer" 
                 size={24} 
                 className={styles.circle} 
                 />)
        }
        
    }


    return (
        <ul className={styles.tasklist}>            
            <li className={isComplete ? styles.taskitemCompleted : styles.taskitem }>
                <div onClick={handleCompleteTask}>
                    {icon}  
                </div>       
                <span className={styles.taskText}>{content}</span>
                <Trash cursor="pointer" size={32} className={styles.trash} />
            </li>
        </ul>
    );
}
