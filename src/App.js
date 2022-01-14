import React,{useState} from 'react';
import Title from './Title';
import Button from './Button';
import Content from './Content';
import Menu from './Menu';
import Layout from './Layout';
import Gugudan from './Gugudan';
import './App.css';


function App() {
  const [number, setNumber] = useState(1);

  function onClickIncrease(){
    setNumber(number+1);
  }

  function onClickDecrease(){
    setNumber(number-1);
  }

  function onClickMultiply(){
    setNumber(number*2)
  }

  function onClickReset(){
    setNumber(0)
  }

  return (
    <Layout>
      <Title />
      <Content />
      <Menu />
      <Gugudan number={number} />
      <div>이용해 주셔서 감사합니다.</div>
      <Button onClick={onClickIncrease}text="+1" />
      <Button onClick={onClickDecrease}text="-1" />
      <Button onClick={onClickMultiply}text="*2"/>
      <Button onClick={onClickReset}text="초기화"/>
    </Layout>
  );
}

export default App;


