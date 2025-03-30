import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState(''); // State for single-line input
  const [textareaInput, setTextareaInput] = useState(''); // State for multi-line input

  // Handle changes in the single-line input field
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle changes in the multi-line input window (textarea)
  const handleTextareaChange = (event) => {
    setTextareaInput(event.target.value);
  };

  // Handle the submit button click
  const handleSubmit = () => {
    console.log('Single-line Input:', input); // Log single-line input to the console
    console.log('Multi-line Input:', textareaInput); // Log multi-line input to the console
    setInput(''); // Clear the single-line input field
    setTextareaInput(''); // Clear the multi-line input window
  };

  return (
    <div style={{ padding: '20px', color: 'black' }}> {/* Set all text color to black */}
      <h2>StreamList</h2>
      <p>Enter your favorite movie or show below:</p>
      {/* Single-line input */}
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type here..."
        style={{
          padding: '10px',
          fontSize: '16px',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          color: 'black', // Input text color set to black
        }}
      />
      <br />
      <br />
      {/* Multi-line input window */}
      <textarea
        value={textareaInput}
        onChange={handleTextareaChange}
        placeholder="Enter a description or list of your favorite movies/shows..."
        rows="5"
        cols="50"
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          color: 'black', // Text area text color set to black
          width: '100%',
          maxWidth: '500px',
        }}
      />
      <br />
      <br />
      {/* Submit button */}
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'black', // Button background color set to black
          color: 'white', // Button font color set to white
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default StreamList;