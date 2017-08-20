import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import * as actions from 'actions'
import add from '../img/add.png'

class TableControls extends React.Component{

  handleSearch(e){
    this.props.dispatch(actions.addSearchText(e.target.value))
  }
  handleUpdateStatus(e){
    if(e.target && e.target.nodeName == "A"){
    var val = e.target.innerHTML;

    var status = val === 'Открытые задачи'? 'Open' : 'Closed'
      this.props.dispatch(actions.getCurrentStatus(status))
    }
  }
  handleUpdateCurrentDate(e){
    if(e.target && e.target.nodeName == "A"){
    var val = e.target.innerHTML;
    this.props.dispatch(actions.getTicketsByDate(val))
    }
  }
  render(){

    var {tickets, datesArr, currentDate, currentStatus, count} = this.props;

    var renderMonthes = () => {
      var filteredArr = datesArr.filter((item) => {
        if(item != currentDate){
          return item
        }
      })
      return filteredArr.map((item) => {
        return <a key={item}>{item}</a>
      })
    }

    var renderCurrentStatus = () => {
      return currentStatus === 'Open' ? 'Открытые задачи' : 'Закрытые задачи'
    }
    var renderSwitchStatus = () => {
      return currentStatus === 'Open' ? 'Закрытые задачи' : 'Открытые задачи'
    }

    return (
      <div>
      <div className='top-bar border-bottom'>
               <div className='top-bar-left'>
                   <ul className='menu'>
                      <li className='menu-text open '>{renderCurrentStatus()}</li>
                      <li><a className='open g-color'>{count}</a></li>
                   </ul>
               </div>

               <div className='top-bar-right'>
                      <ul className='menu'>
                         <li>
                           <img className='avatar' src={add} alt='add task'/>
                           <a className='add'>
                             Добавить задачу
                           </a>
                         </li>
                      </ul>
               </div>
      </div>
      <div className='top-bar with-search'>
               <div className='top-bar-left'>
                   <ul className='menu'>
                      <li className='padding-button drop'>
                        <a className='button'>
                          {currentDate}<span className='arrow-down'>&#9660;</span>
                        </a>
                        <div onClick={this.handleUpdateCurrentDate.bind(this)} className='dropdown-content'>
                        { renderMonthes()}
                        <a>Все</a>
                       </div>
                      </li>
                      <li onClick={this.handleUpdateStatus.bind(this)} className='open-drop'>
                        <a className='button'>
                          {renderCurrentStatus()} <span className='arrow-down'>&#9660;</span>
                        </a>
                        <div className='dropdown-content'>
                         <a>{renderSwitchStatus()}</a>
                       </div>
                      </li>
                   </ul>
               </div>

               <div className='top-bar-right'>
                   <form >
                     <ul className='menu'>
                        <li><input onChange={this.handleSearch.bind(this)}  type='search' placeholder='Поиск задач по проекту'/></li>
                     </ul>
                  </form>
              </div>
      </div>
    </div>
    )
  }
}

export default connect((state) => {
  return {
    tickets: state.tickets,
    datesArr: state.datesArr,
    currentDate: state.currentDate,
    currentStatus: state.currentStatus
  }
})(TableControls);
