
// parent componnet(sab component tukde tukde m dalege)
import React, {useState} from 'react';
import Expenses from './components/EXPENSE/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
        let dummy__expense=[
                {
                    id:'e1',
                    title:"scool",
                    amount:400,
                    date:new Date(2012, 10, 2)
                },
                {
                    id:'e2',
                    title:"scoo",
                    amount:500,
                    date:new Date(2012, 10, 3)
                },
                {
                    id:'e3',
                    title:"sc",
                    amount:600,
                    date:new Date(2012, 10, 4)
                },
                {
                    id:'e4',
                    title:"s",
                    amount:700,
                    date:new Date(2012, 10, 5)
                }
            ]

        function App(){
            const[expenses,setExpenses] = useState(dummy__expense);

            const addExpenseHandler =(expense) =>{
                const upDatedExpense = [expense, ...expenses]
                setExpenses(upDatedExpense)   //yaha data revice horha hai
            }
            return (
                <div>
                    <NewExpense onAddExpense={addExpenseHandler}/>
                    <Expenses item={expenses}/>
                </div>
                
                    );
     
     
   
          
   
                    }
        export  default App;


        