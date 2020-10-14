import React from 'react'
import './css/Chat.css'
import moment from 'moment'

const ChatIn = (props) => {
    return (
        <div className='msgbox chatIn'>
          <span className='chatSender'>
              {props.name}
          </span>
          <span className='message'>
            {props.message}
            </span>
            <span className='timeStamp'>
            {moment(props.time.toDate()).format('LT')}
            </span>
        </div>
    )
}

export default ChatIn