import React from 'react';
import  "./Sidebar.css";
import lol from "./lol.jpg"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import {IconButton,Avatar} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat.js'
function Sidebar() {
    return (
        <div className='sidebar'>
            
            <div className="sidebar__header">
            <Avatar src={lol}/>
                <div className="sidebar__headerRight">
                <IconButton><DonutLargeIcon/></IconButton>
                <IconButton><MoreVertIcon/></IconButton>
                <IconButton><ChatIcon/></IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <IconButton> <SearchOutlinedIcon/> </IconButton>
                    <input placeholder="Cherchez un chat" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats" id="style-1">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>      
            </div>
        </div>
    )
}

export default Sidebar
