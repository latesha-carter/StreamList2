import React, { useState } from 'react';

const UserInputList = () => {
  const [userInput, setUserInput] = useState('');
  const [inputList, setInputList] = useState([]);

  const handleAddInput = () => {
    if (userInput.trim()) {
      setInputList([...inputList, { text: userInput, completed: false }]);
      setUserInput('');
    }
  };

  const handleDeleteInput = (index) => {
    setInputList(inputList.filter((_, i) => i !== index));
  };

  const handleEditInput = (index, newText) => {
    const updatedList = [...inputList];
    updatedList[index].text = newText;
    setInputList(updatedList);
  };

  const handleCompleteInput = (index) => {
    const updatedList = [...inputList];
    updatedList[index].completed = !updatedList[index].completed;
    setInputList(updatedList);
  };

  return (
    <div>
      <h1>User Input List</h1>
      <div>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your input"
        />
        <button onClick={handleAddInput}>Add</button>
      </div>
      <ul>
        {inputList.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            <span>{item.text}</span>
            <button onClick={() => handleCompleteInput(index)}>
              {item.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => {
                const newText = prompt('Edit your input:', item.text);
                if (newText !== null) handleEditInput(index, newText);
              }}
            >
              Edit
            </button>
            <button onClick={() => handleDeleteInput(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInputList;
