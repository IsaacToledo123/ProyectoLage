import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatMessage from './ChatMessage';

const socket = io('http://localhost:4000');

const ClientChat = () => {
  const [room, setRoom] = useState('entrenador');
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('previousMessages', (messages) => {
      setMessages(messages);
    });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('previousMessages');
      socket.off('message');
    };
  }, []);

  const joinRoom = () => {
    socket.emit('joinRoom', { room, user });
  };

  const sendMessage = () => {
    if (message) {
      socket.emit('message', { room, user, message });
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Client Chat</h2>
      <div>
        <label htmlFor="room">Room:</label>
        <select id="room" value={room} onChange={(e) => setRoom(e.target.value)}>
          <option value="entrenador">Entrenador</option>
          <option value="nutriologo">Nutriólogo</option>
        </select>
      </div>
      <div>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </ul>
      <input
        id="messageInput"
        autoComplete="off"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ClientChat;
