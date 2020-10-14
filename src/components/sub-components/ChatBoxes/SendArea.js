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
        }
    }
    return (
        <form className='send-area' id='form'>
            <textarea id='message' onChange={handleChange} placeholder='Type a message......'></textarea>
            <button className='sendBtn material-icons' onClick={handleSubmit}>send</button>
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