import React from 'react'
import {connect} from 'react-redux'
import ReactPaginate from 'react-paginate'
import * as actions from 'actions'
import * as api from 'API'

import lightning from '../img/lightning.png'
import Ticket from 'Ticket'
import TableControls from 'TableControls'
import TableHead from 'TableHead'
import Footer from 'Footer'


class TicketsList extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      limit: 20,
      offset: 0
    }
  }

  handlePageClick(e) {
    var {limit} = this.state;
    var {dispatch} = this.props;
    this.setState({
      offset: e.selected * limit
    })
  }
  handleSetLimit(e) {
    if(e.target && e.target.nodeName == "A"){
      this.setState({
        limit: e.target.innerHTML
      })
    }
    var lim = this.refs.limits.getElementsByTagName('a');
    [...lim].forEach((item) => {
      item.classList.remove('current-amount')
    });
    e.target.classList.add('current-amount')
  }
  componentDidMount(){
    var {dispatch} = this.props;
    dispatch(actions.startGetTickets());
  }
  render(){
    var {limit, offset} = this.state;
    var {tickets, currentFilter, searchText, currentStatus, currentDate} = this.props;


    var renderTickets = api.filteredTickets(limit, offset, tickets, currentFilter, searchText, currentStatus, currentDate);
    var currentlyRendered = renderTickets.ticketsLength;
    var ticketsArr = renderTickets.limited.map((ticket) => {
        return <Ticket key={ticket.id} {...ticket}/>
      });

    var pageCount = Math.ceil(currentlyRendered / limit);
    return (
      <div className='medium-10 large-10 small-12  cell tickets-list'>
        <h3><img className='light' src={lightning} alt='light'/>Barselona Design</h3>
        <TableControls count={currentlyRendered}/>
        <div className='table-padding'>
          <table className='unstriped'>
            <TableHead/>
            <tbody>
              {ticketsArr}
            </tbody>
          </table>

          <div className='top-bar'>
                   <div className='top-bar-left'>

                     <ReactPaginate
                                    breakLabel={<a href="">...</a>}
                                    breakClassName={"break-me"}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={4}
                                    onPageChange={this.handlePageClick.bind(this)}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"current"} />

                   </div>

                   <div className='top-bar-right'>
                       <form >
                         <ul ref='limits' onClick={this.handleSetLimit.bind(this)} className='menu per-page'>
                            <li><a className='per-page-title'>Количество задач:</a></li>
                            <li><a className='current-amount' >20</a></li>
                            <li><a >50</a></li>
                            <li><a >100</a></li>
                            <li><a >все</a></li>
                         </ul>
                      </form>
                  </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    tickets: state.tickets,
    currentFilter: state.currentFilter,
    searchText: state.searchText,
    currentStatus: state.currentStatus,
    currentDate: state.currentDate
  }
})(TicketsList);
