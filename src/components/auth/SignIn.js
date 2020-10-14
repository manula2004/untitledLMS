import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Auth.css'
import { connect } from 'react-redux'
import {signIn} from '../../store/action/authActions'
import { Redirect } from 'react-router-dom'

export class SignIn extends Component {
   state = {
      email: '',
      password: '',
  }
  handleChange = (e) =>{
      this.setState({
        [e.target.id]:e.target.value
      })
  }
  handleSubmit = (e) =>{
      e.preventDefault();
      // console.log(this.state);
      this.props.signIn(this.state);
  }
  render() {
      const { authError,auth } = this.props
      if(auth.uid){
          return <Redirect to='/' />
      }
        return (
            <div className='AuthForm'>
                    <div className='container'>
                       <div className='titleDiv'>untitledLMS
                       <div className='titleSmall'>a better way....</div>
                       </div>
                       <div className='separator'>
                       </div>
                <form onSubmit={this.handleSubmit}>
                   <div className="input-field">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" required onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                     <label htmlFor="password">Password</label>
                     <input type="password" id="password" required onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                     <button className='btn lighten-1 z-depth-0'>Login</button>
                     <div className='red-text center'>
        {authError ? <p>{authError}</p> : null}
                     </div>
                  </div>
                  <Link to='/signup'>
         <span className='title center'>Don't have an Account?</span>
         </Link>
                </form>
                
            </div>
     </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       authError: state.auth.authError,
       auth: state.firebase.auth
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
       signIn: (creds) => dispatch(signIn(creds))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)