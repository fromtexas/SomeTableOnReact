import React from 'react'
import * as Redux from 'react-redux'

import Nav from 'Nav'
import SideBar from 'SideBar'
import TicketsList from 'TicketsList'




class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <Nav/>
          <div className='grid-x margin grid-margin-x'>
            <SideBar/>
            <TicketsList/>
          </div>
      </div>
    )
  }
}


export default Redux.connect()(Main);
