import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const selectedCurrency = currency.find((curr) => curr === currency);
  const currencySymbol = selectedCurrency ? selectedCurrency.match(/\((.+?)\)/)[1] : '';
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }



    return (
<div className='alert alert-secondary'>
<span>
    
    Budget: {currencySymbol}</span>

<input type="number" step="10" value={newBudget}   onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;