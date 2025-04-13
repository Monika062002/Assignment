// src/FormComponent.jsx
import React, { useState } from 'react';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter something..."
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Submit</button>
    </form>
  );
};

export default FormComponent;
