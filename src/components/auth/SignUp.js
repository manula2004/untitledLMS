import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/Auth.css'
import { signUp } from '../../store/action/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
export class SignUp extends Component {
   state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      bio: ''
  }
  handleChange = (e) =>{
      this.setState({
        [e.target.id]:e.target.value
      })
  }
  handleSubmit = (e) =>{
      e.preventDefault();
      // console.log(this.state);
      this.props.signUp(this.state)
  }
    render() {
      const { auth, authError } = this.props
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
         {/* <h5 className="grey-text text-darken-3">Sign Up</h5> */}
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required onChange={this.handleChange} />
           </div>
           <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required onChange={this.handleChange} />
           </div>
           <div className="input-field">
                     <label htmlFor="firstName">First Name</label>
                     <input type="text" id="firstName" required onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                     <label htmlFor="lastName">Last Name</label>
                     <input type="text" id="lastName" required onChange={this.handleChange} />
                  </div>
                  <div className="input-field">
                     <label htmlFor="lastName">Bio</label>
                     <input type="text" id="bio" required onChange={this.handleChange} />
                  </div>
           <div className="input-field">
              <button className='btn lighten-1 z-depth-0'>Register</button>
              <div className='red-text center'>
 {authError ? <p>{authError}</p> : null}
              </div>
           </div>
           <Link to='/signin'>
         <span className='title center'>Already have an Account?</span>
         </Link>
         </form>

         {/* <div className='separator center'></div> */}
         {/* <span className='title center'>-RAID SYSTEMS-</span> */}
     </div>
     </div>
        )
    }
}

const mapStateToProps = (state) => {
   console.log(state)
   return {
       auth: state.firebase.auth,
       authError: state.auth.authError
   }
 
}

const mapDispatchToProps = (dispatch) => {
   return {
       signUp: (newUser) => dispatch(signUp(newUser))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
