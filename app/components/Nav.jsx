import React from 'react'


import logo from '../img/logo.png'
import avatar from '../img/user_avatar.png'

class Nav extends React.Component {
  render(){
    return (
      <div className='top-bar navy'>
               <div id='flex-06' className='top-bar-left'>
                   <ul className='menu'>
                      <li className='menu-text'> <img src={logo} alt='logo'/> </li>
                   </ul>
               </div>

               <div className='top-bar-left'>
                   <ul className='menu'>
                      <li><a className='barselona'>Barselona Design<span className='arrow-down'>&#9660;</span></a></li>
                   </ul>
               </div>

               <div className='top-bar-right'>
                      <ul className='menu'>
                         <li><img className='avatar' src={avatar} alt='avatar'/><a className='user-name'>Petr_Osmanov<span className='arrow-down'>&#9660;</span></a></li>
                      </ul>
               </div>
      </div>
    )
  }
}

export default Nav 
