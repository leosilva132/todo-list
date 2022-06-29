import { Trash, Circle, CheckCircle, IconWeight } from 'phosphor-react';
import { useState } from 'react';
import styles from './Tasks.module.css';

export function Tasks(){

    const [CircleWeight, setCircleWeight] = useState<IconWeight>("bold");
    const [CheckCicleColor, setCheckCicleColor] = useState<IconWeight>("var(--purple-dark)");


    return (
        <ul className={styles.tasklist}>            
            <li className={styles.taskitem}>
                <Circle 
                color="var(--blue)"
                 weight={CircleWeight}
                 cursor="pointer" 
                 size={32} 
                 className={styles.circle} 
                 onMouseOver={() => setCircleWeight('duotone')}
                 onMouseLeave={() => setCircleWeight('bold')}/>
                
                <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash cursor="pointer" size={32} className={styles.trash} />
            </li>
            <li className={styles.taskitemCompleted}>
                <CheckCircle 
                color={CheckCicleColor} 
                cursor='pointer' 
                weight='fill'
                size={24} 
                onMouseOver={() => setCheckCicleColor('var(--purple)')}
                onMouseLeave={() => setCheckCicleColor('var(--purple-dark)')}/>
                    <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
                <Trash cursor="pointer" size={32} className={styles.trash} />
            </li> 
        </ul>
    );
}
