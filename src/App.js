import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import Pusher from 'pusher-js';
import React, { useState, useEffect } from 'react';
import axios from './axios';
function App() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync')
      .then((response)=>{
     
      setMessages(response.data);
    });
  },[]);
  useEffect(()=>{
    const pusher = new Pusher('1e0d80e5bb46ba6b7252', {
      cluster: 'eu',
    });
    const channel = pusher.subscribe("messages");
    channel.bind('inserted', function(data) {
      setMessages([...messages,data])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  console.log(messages)
  return (
    <div className="app">
      
      <div className="app__body">
      <Sidebar />
      <Chat message={messages} />
      
      </div>
    
    </div>
  );
}

export default App;
