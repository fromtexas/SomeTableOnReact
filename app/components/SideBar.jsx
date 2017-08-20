import React from 'react'
import * as Redux from 'react-redux'
import * as actions from 'actions'

class SideBar extends React.Component {
  handleUpdateStatus(e){
    if(e.target && e.target.nodeName == 'A'){
      this.props.dispatch(actions.getCurrentStatus(e.target.dataset.val))
    }
  }
  render(){
    return (
      <div className='medium-2 large-2 small-12  cell  side-bar'>
        <button  className='button expanded'>ДОБАВИТЬ ЗАДАЧУ</button>
        <div className='top-side-bar-section main-color'>
          <a>СВОДНАЯ ИНФОРМАЦИЯ</a>
        </div>
        <div className='middle-side-bar-section main-color'>
          <div className='right-tr'></div>
          <h6>Все Задачи</h6>
          <ul onClick={this.handleUpdateStatus.bind(this)}>
            <li><a  data-val='Open'>Открытые</a></li>
            <li><a data-val='Closed'>Выполненные</a></li>
          </ul>
        </div>
        <div className='bottom-side-bar-section main-color'>
          <a>Отчеты</a>
        </div>
      </div>
    )
  }
}

export default Redux.connect()(SideBar);
