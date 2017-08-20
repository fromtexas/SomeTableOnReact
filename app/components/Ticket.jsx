import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import blueImg from '../img/blue_round.png'
import orangeImg from '../img/orange_round.png'
import redImg from '../img/round_red.png'
import plusImg from '../img/plus.png'

class Ticket extends React.Component {
  render(){
    var {id, title, t, p, status, solve, created_at, updated_at, deadline} = this.props;
    var createdUnix = moment.unix(created_at).format('D. M. YYYY ');
    var updatedUnix = moment.unix(updated_at).format('D. M. YYYY ');
    var deadlineUnix = moment.unix(deadline).format('D. M. YYYY ');
    var roundImg = () => {
      if(t == 1){
        return blueImg
      }else if (t == 2) {
        return orangeImg
      }else if (t == 3) {
        return redImg
      }else {
        return plusImg
      }
    };
    var dot = () => {
      if(p == 1){
        return 'green-dot'
      }else if (p == 2) {
        return 'red-dot'
      }else{
        return 'gray-dot'
      }
    };
    return (
      <tr>
        <td><img src={roundImg()}/></td>
        <td className='ticket-id'>{id}</td>
        <td className='ticket-title'>{title}</td>
        <td><span className={dot()}>&#9679;</span></td>
        <td>{status}</td>
        <td>{solve}</td>
        <td>{createdUnix}</td>
        <td>{updatedUnix}</td>
        <td>{deadlineUnix}</td>
      </tr>
    )
  }
}

export default connect()(Ticket);
