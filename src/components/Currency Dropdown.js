import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    

    const handleCurrency = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        });
    };

    return (
        <div className='alert alert-secondary'>
        <select
            onChange={handleCurrency}
            className='form-select'
            style={
                {
                    backgroundColor: "lightgreen",
                }
            }
        >
            {currency.map((option) => (
                <option key={option} value={option}
                style={{ backgroundColor: "lightgreen", hover: "green"}}>
                    {option}
                </option>
            ))}
        </select>
        </div>
    );
};

export default Currency;