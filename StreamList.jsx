import React, { useState } from 'react';
import InputForm from './InputForm';
import StreamItem from './StreamItem';

const StreamList = () => {
  const [streams, setStreams] = useState([]);

  const addStream = (text) => {
    setStreams([...streams, { id: Date.now(), text, completed: false }]);
  };

  const deleteStream = (id) => {
    setStreams(streams.filter((stream) => stream.id !== id));
  };

  const editStream = (id, newText) => {
    setStreams(
      streams.map((stream) =>
        stream.id === id ? { ...stream, text: newText } : stream
      )
    );
  };

  const toggleComplete = (id) => {
    setStreams(
      streams.map((stream) =>
        stream.id === id ? { ...stream, completed: !stream.completed } : stream
      )
    );
  };

  return (
    <div>
      <h1>Stream List</h1>
      <InputForm addStream={addStream} />
      <ul>
        {streams.map((stream) => (
          <StreamItem
            key={stream.id}
            stream={stream}
            deleteStream={deleteStream}
            editStream={editStream}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
