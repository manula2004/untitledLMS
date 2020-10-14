import React, { useEffect, useRef } from 'react'
import ChatIn from './ChatBoxes/ChatIn'
import ChatOut from './ChatBoxes/ChatOut'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ChatList = (props) => {
    const { auth } = props;
    let { chat } = props;
    if(chat){
        chat = chat.slice().sort((a,b)=> a.timeSent.seconds-b.timeSent.seconds);
        // console.log(sortedProjects);
    }
    const handleAuthCheck = (msgauthor) =>{
     if(msgauthor===auth.uid){
         return true
     }
     else{
         return false
     }
    }

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(scrollToBottom, [chat]);
    return (
        <div className='chat' id='chat'>
            { chat && chat.map(chatdata => {
                let chatAuthor = chatdata.authorUID
                if(handleAuthCheck(chatAuthor)){
                return(
                    <ChatOut message={chatdata.message} time={chatdata.timeSent}/>
                )}else{
                    return(
                        <ChatIn message={chatdata.message} time={chatdata.timeSent} name={chatdata.authorFirstName}/>
                    ) 
                }
                
                })
                }
                <div ref={messagesEndRef} />
        </div>

    )
    
}

const mapStateToProps = (state) => {
    // console.log(state);
  return {
      chat: state.firestore.ordered.chat,
      auth: state.firebase.auth
  }
}

export default compose(firestoreConnect(() => ['chat']),connect(mapStateToProps))(ChatList)
