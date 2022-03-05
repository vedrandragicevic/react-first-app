import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // useState returns array with 2 elements
    const [title, setTitle] = useState(props.title);

    // Don't add empty () when calling this arrow function in the button click event
    const clickHandler = () => {
        setTitle('Updated');
    }

    return (<Card className='expense-item'>
                <ExpenseDate date={props.date}/>
                <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Change title</button>
            </Card>
            );
}

export default ExpenseItem;