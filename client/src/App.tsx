import { Route, Routes } from 'react-router-dom';
import ChatList from './pages/chat/ChatList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatList />} />
      {/* <Route path="/chat-item" element={<ChatItem />} /> */}
    </Routes>
  );
}

export default App;
