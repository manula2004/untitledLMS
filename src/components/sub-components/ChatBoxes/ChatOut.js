import React from 'react'
import './css/Chat.css'
import moment from 'moment'

const ChatOut = (props) => {
    return (
        <div className='msgbox chatOut'>
            <span className='message'>
            {props.message}
            </span>
            <span className='timeStampOut'>
                {moment(props.time.toDate()).format('LT')}
            </span>
        </div>
    )
}

export default ChatOut
