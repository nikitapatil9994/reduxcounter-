import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD, SUB } from '../Redux/counter/actionType';
import { AddToCounter, SubToCounter } from '../Redux/counter/action';

const Counter = () => {


    const dispatch = useDispatch();
    const {counter} = useSelector((store)=>store.counter);
    

  return (
    <div
      style={{ 
    textAlign: 'center', 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif', 
    backgroundColor: '#f5f5f5', 
    borderRadius: '10px', 
    maxWidth: '300px', 
    margin: '20px auto', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
  }}
    >
    <h1
     style={{ 
      fontSize: '54px', 
      margin: '10px 0', 
      color: '#333' 
    }}>Counter</h1>
      <h1
      style={{ 
      fontSize: '36px', 
      margin: '20px 0', 
      color: '#007BFF'}}>{counter}</h1>

      <button onClick={()=>{
        dispatch(AddToCounter(1))
        console.log(counter);
      }}
      style={{ 
      padding: '10px 20px', 
      fontSize: '16px', 
      color: '#fff', 
      backgroundColor: '#28a745', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      margin: '5px' 
    }}
      > + </button>
      <button onClick={()=>{
        dispatch(SubToCounter(1))
      }}
      style={{ 
      padding: '10px 20px', 
      fontSize: '16px', 
      color: '#fff', 
      backgroundColor: '#dc3545', 
      border: 'none', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      margin: '5px'}}> -  </button>
    </div>
    
  );
}

export default Counter
