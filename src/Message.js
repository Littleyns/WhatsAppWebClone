import React from 'react'
import './Chat.css'
function Message(props) {
    let classi=props.received?"chat__message chat__receiver":"chat__message";
    return (
        
        <p className={classi}>
            <span className="chat__name">{props.name}</span>
              {props.message}
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
              </p>
    )
}

export default Message
