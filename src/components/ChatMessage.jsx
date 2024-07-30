import React from 'react';

const ChatMessage = ({ user, message, timestamp }) => (
  <li>
    {user}: {message} ({new Date(timestamp).toLocaleTimeString()})
  </li>
);

export default ChatMessage;
