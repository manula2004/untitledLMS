import React, { Component } from 'react'
import './css/Layout.css'
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/action/authActions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

export class NavBar extends Component {
    render() {
        const { auth,profile } = this.props;
        if(!auth.uid){
            return <Redirect to='/signin' />
        }
        return (
            <div className='sidebar'>
                <div className='nav-link profile'>
                    <NavLink to='/profile'>
                <div className='profile-icon'>{profile.initials}</div>
                </NavLink>
                <span className='profile-data'>
                    <span className='profile-name'>{profile.firstName}</span>
                    <span className='profile-title'>Student</span>
                    </span>
                    <div className='material-icons nav-icon' onClick={this.props.signOut}>login</div>
                </div>
                <span className='nav-topic'>Tabs</span>
                <NavLink  exact to='/' className='nav-link' activeClassName="nav-link--active">
               <div className='material-icons nav-icon'>home</div>
               <span className='nav-link-topic'>Dashboard</span>
               </NavLink>
               <NavLink to='/events' className='nav-link' activeClassName="nav-link--active">
               <div className='material-icons nav-icon'>event</div>
               <span className='nav-link-topic'>Events</span>
               </NavLink>
               <NavLink to='/chat' className='nav-link' activeClassName="nav-link--active">
               <div className='material-icons nav-icon'>chat</div>
               <span className='nav-link-topic'>Public Chat</span>
               </NavLink>
               <NavLink to='/forum' className='nav-link' activeClassName="nav-link--active">
               <div className='material-icons nav-icon'>forum</div>
               <span className='nav-link-topic'>Forum</span>
               </NavLink>
               <NavLink to='/resources' className='nav-link' activeClassName="nav-link--active">
               <div className='material-icons nav-icon settings-icon'>book</div>
               <span className='nav-link-topic'>Resouces</span>
               </NavLink>
               <NavLink to='/settings' className='nav-link' activeClassName="nav-link--active">
               <div className='material-icons nav-icon settings-icon'>settings</div>
               <span className='nav-link-topic'>Settings</span>
               </NavLink>
               <div className='more-info-sec'>
                   <span>untitledLMS</span>
               </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state);
  return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);