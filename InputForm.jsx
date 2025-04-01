import React, { useState } from 'react';

const InputForm = ({ addStream }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addStream(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new stream"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputForm;
