import React, { Component } from 'react'
import './css/Chat.css'
import {sendMsg} from '../../../store/action/chatActions'
import {connect} from 'react-redux'

const SendArea = (props) => {
    var state = {
       message: ''
    }
    const handleChange = (e) =>{
        state =({
          [e.target.id]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(state.message!==''){
        props.sendMsg(state)
        document.getElementById("form").reset();
        state = {
            message: ''
         }
        }
    }
    const handleAddEmoticon = (e) => {
        e.preventDefault();
        let txtarea = document.getElementById('message')
        txtarea.value += ' \u{1F600}'
        state = {
            message: txtarea.value
         }
    }

    return (
        <form className='send-area' id='form'>
            <textarea id='message' onChange={handleChange} placeholder='Type a message......'></textarea>
            <div className='sendBtn material-icons' onClick={handleAddEmoticon}>insert_emoticon</div>
            <div className='sendBtn material-icons' onClick={handleSubmit}>send</div>
        </form>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
  return {
      auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMsg: (message) => dispatch(sendMsg(message))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendArea)