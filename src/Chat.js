import './Chat.css'
import axios from "./axios";
import React, { useState, useEffect } from 'react';
import Message from './Message.js'
import {IconButton,Avatar} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
function Chat({message}) {
  const [input,setInput] = useState('');
  const sendMessage = async (e)=>{
    e.preventDefault();
     await axios.post("/messages/new",{
      message:input,
      name:"Youness",
      received:false
      
  })
  setInput("")
  };
    return (
        <div className='chat'>
          <div className="chat__header">
          <Avatar/>
          <div className="chat__headerInfo">
            <h3>Room name</h3>
            <p>un placeholder comme les autres</p>
          </div>
          <div className="chat__headerRight">
          <IconButton><SearchOutlinedIcon/></IconButton>
          <IconButton><AttachFileIcon/></IconButton>
          <IconButton><MoreVertIcon/></IconButton>
          </div>
          </div>
          <div className="chat__body" id="style-1">
          {message.map(m=>   
                (<Message name={m.name} received={m.received} message={m.message}/>)

            )}
                

           

  

          </div>
          <div className="chat__footer">
          <IconButton><MoodIcon /></IconButton>
        <form>
          <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ecrivez votre message" type="text"/>
          <button onClick={sendMessage} type="submit">Envoyer</button>
        </form>
        <IconButton> <MicIcon/></IconButton>
       
          </div>
        </div>
    )
}

export default Chat
