import React, { useState } from 'react';

const StreamItem = ({ stream, deleteStream, editStream, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(stream.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editStream(stream.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: stream.completed ? 'line-through' : 'none',
          }}
        >
          {stream.text}
        </span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={() => deleteStream(stream.id)}>Delete</button>
      <button onClick={() => toggleComplete(stream.id)}>
        {stream.completed ? 'Undo' : 'Complete'}
      </button>
    </li>
  );
};

export default StreamItem;
