import React, { useState } from 'react'; 
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card'


function ExpenseItem(props){

    
    // const [newTitle, setNewTitle,] = useState("");

    // const [title, setTitle,] = useState(props.title); //whatever the variable made from usestate they are mutable
    // const clickHandler =()=>{
    //     setTitle(newTitle);
    // }
    // const changeHandler=(e)=>{
    //     setNewTitle(e.target.value);
    // }
    return (
       
            <Card className='expense-item'>
                
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                    {/* <h2>{title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                    {/* <input type="text"  value={ newTitle} onChange={changeHandler}/>
                    <button onClick={clickHandler} >Change Title</button> */}
                </div>

            </Card>
       
    );
}
export default ExpenseItem;