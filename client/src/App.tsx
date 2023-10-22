import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('http://localhost:4000');

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });

    return () => {
      socket.off('connect');
    };
  }, []);

  const sendMessage = () => {
    socket.emit('send_message', { message: 'Hello' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={sendMessage}>연결</button>
    </div>
  );
}

export default App;
