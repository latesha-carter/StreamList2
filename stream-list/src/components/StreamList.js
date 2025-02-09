import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <h2>StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;
