import React, {useState} from 'react';
import styles from './Gugudan.module.css';
import Layout from './Layout';



const Gugudan=({number}) => {
    const num = [1,2,3,4,5,6,7,8,9,10];

return(
    <div className={styles.GuStyle}>
        {num.map((n)=>
        <p className={styles.GuStyle}>{number}*{n}={number*n}</p>
        )}
    </div>
);
};

export default Gugudan; 




