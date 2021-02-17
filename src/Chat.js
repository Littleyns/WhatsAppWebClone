import React from 'react'
import './Chat.css'
import Message from './Message.js'
import {IconButton,Avatar} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
function Chat() {
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

          <Message message="lol" name="younes" receiver={false} />
          <Message message="lol" name="younes" receiver={true} />

          </div>
          <div className="chat__footer">
          <IconButton><MoodIcon /></IconButton>
        <form>
          <input placeholder="Ecrivez votre message" type="text"/>
          <button type="submit">Envoyer</button>
        </form>
        <IconButton> <MicIcon/></IconButton>
       
          </div>
        </div>
    )
}

export default Chat
