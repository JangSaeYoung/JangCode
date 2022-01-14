import React, {useState} from 'react';
import styles from './Menu.module.css';

function Menu(){
   const [number, setNumber] = useState(0);

   function alcohol(){
       setNumber(number+1);
   }

   function alcoholDel(){
       setNumber(0);
   }
   

return(
    <div className={styles.alcoholMenu}>
        <div>
            <p className={styles.readyAlcohol}>다양한 술이 준비되어 있습니다. </p>
            <button onClick={alcohol}>소주+1</button>
            <button onClick={alcohol}>맥주+1</button>
            <button onClick={alcohol}>막걸리+1</button>
            <button onClick={alcohol}>정종+1</button><br></br>
            <button className={styles.cancleBtn} onClick={alcoholDel}>주문 취소</button>
            <div className={styles.alcoholSumText}>주문하신 술은 총 <b className={styles.sumNumber}>{number}</b>입니다.</div>
        </div>
        <div>구구단 틀린 사람이 돈 내는겁니다.</div>

    </div>
);
}

export default Menu;



