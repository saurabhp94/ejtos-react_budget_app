import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Currency.css'; // Import the CSS file

const Currency = () => {
  const { currency, dispatch, selectedCurrency } = useContext(AppContext);

  const handleCurrency = (e) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: e.target.value,
    });
  };

  return (
    <div className="currency-container">
      <select
        onChange={handleCurrency}
        className="currency-select"
        value={selectedCurrency}
      >
        {currency.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="currency-arrow">▼</div>
    </div>
  );
};

export default Currency;