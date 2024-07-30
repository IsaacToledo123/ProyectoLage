import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const AdminComponent = () => {
  const [socket, setSocket] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const socketConnection = io("http://localhost:3000");
  
    socketConnection.on("connect", () => {
      console.log("Conectado al servidor de socket");
    });
  
    socketConnection.on("newRoom", (roomName) => {
      setRooms((prevRooms) => [...prevRooms, roomName]);
    });
  
    socketConnection.on("adminMessage", handleAdminMessage);
  
    setSocket(socketConnection);
  
    return () => {
      socketConnection.disconnect();
    };
  }, []);
  
  const handleAdminMessage = (message) => {
    if (!messages.some((msg) => msg === message)) {
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };
  

  const handleJoinRoom = (roomName) => {
    setSelectedRoom(roomName);
    setMessages([]);
    socket.emit("joinRoom", roomName);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      socket.emit("clientMessage", {
        room: selectedRoom,
        message: inputMessage,
      });
      setInputMessage("");
    }
  };

  return (
    <div class="flex h-screen antialiased text-gray-800">
      <div class="flex flex-row h-full w-full overflow-x-hidden">
        <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
          <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
              <span class="font-bold">Active Conversations</span>
              <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"></span>
            </div>
            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
              {rooms.map((roomName) => (
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div
                    class="ml-2 text-sm font-semibold"
                    onClick={() => handleJoinRoom(roomName)}
                  >
                    {roomName}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-auto h-full p-6">
          <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div class="flex flex-col h-full overflow-x-auto mb-4">
              <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                  <h1 className="">{selectedRoom}</h1>
                  {messages.map((message, index) => (
                    <div
                      className="col-start-1 col-end-8 p-3 rounded-lg"
                      key={index}
                    >
                      <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                          U
                        </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{message}</div>
                          </div>
                   
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              <div>
                <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
