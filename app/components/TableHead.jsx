import React from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'


class TableHead extends  React.Component{

  handleFilter(e){
    if(e.target && e.target.nodeName == "TH" ){
      this.props.dispatch(actions.addCurrentFilter(e.target.dataset.val))
    }
  }
  render (){
    return (
      <thead>
        <tr onClick={this.handleFilter.bind(this)}>
          <th data-val='t'>T</th>
          <th data-val='id'>Тикет</th>
          <th width='320' data-val='title'>Название</th>
          <th className='arrow' width='40' data-val='p'>П</th>
          <th data-val='status'>Статус</th>
          <th data-val='solve'>Решение</th>
          <th data-val='created_at'>Создано</th>
          <th data-val='updated_at'>Обновлено</th>
          <th data-val='deadline'>Дедлайн</th>
        </tr>
      </thead>
    )
  }
}

export default connect()(TableHead);
