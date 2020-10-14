import React, { Component } from 'react'
import ChatList from './sub-components/ChatList'
import SendArea from './sub-components/ChatBoxes/SendArea'

export default class Chat extends Component {
    render() {
        return (
            <div className='routeArea'>
                <div className='chat-area'>
                 <ChatList />
                 </div>
                 <SendArea />
            </div>
        )
    }
}
