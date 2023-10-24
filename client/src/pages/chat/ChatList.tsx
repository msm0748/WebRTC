import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

export default function ChatList() {
  const [inputValue, setInputValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });

    return () => {
      socket.off('connect');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('enter_room', { payload: inputValue });
  };
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <button onClick={sendMessage}>연결</button>
      </div>
    </div>
  );
}
