import axios from 'axios'
import moment from 'moment'


export var getJson = () => {
  var requestUrl = `./tickets.json`;

  return axios.get(requestUrl).then((res) => {

    return res.data;
  }, (res) => {
    throw new Error(res);
  })
};

var searchText = (tickets, text) => {
    return  tickets.filter((ticket) => {
        if((ticket.title.toLowerCase()).indexOf(text.toLowerCase()) != -1){
          return ticket;
        }
      });
}

var sortArr = (tickets, val) => {
  return tickets.sort((a, b) => a[val].localeCompare(b[val]))
}

var initFilter = (tickets, status) => {
  return  tickets.filter((ticket) => {
      if((ticket.status).indexOf(status) != -1){
        return ticket;
      }else if (status === 'Все') {
        return ticket;
      }
    });
}

export var dateLocal = (item) => {
  var monthes = [	'Январь',	'Февраль',	'Март',	'Апрель',	'Май',	'Июнь',	'Июль',	'Август',	'Сентябрь',	'Октябрь',	'Ноябрь',	'Декабрь'];
  var month = moment.unix(item).format('M');
  var year = moment.unix(item).format('YYYY');
  return `${monthes[month-1]}, ${year}`;
}

var filterByDate = (tickets, date) => {
  var newDateArr = tickets.map((item) => {

    item.formated =  dateLocal(item.updated_at)
    return item
  })
  return newDateArr.filter((ticket) => {
      if((ticket.formated).indexOf(date) != -1){
        return ticket;
      }else if (date === 'Все') {
        return ticket;
      }
    })
}


export var filteredTickets = (limit, offset, tickets, val, text, status, date) => {
  var tickets = searchText(tickets, text);
      tickets = sortArr(tickets, val);
      tickets = initFilter(tickets, status);
      tickets = filterByDate(tickets, date);
  var filtered = [];
  var limited = [];
  if(text){
    offset = 0
  }
  var ticketsLength = tickets.length;
  tickets.forEach((ticket, index) => {
    if( index >= offset){
      filtered.push(ticket)
    }
  });
  filtered.forEach((ticket, index) => {
    if(index < limit){
      limited.push(ticket)
    }else if (limit === 'все') {
      limited.push(ticket)
    }
  });
  return  {limited, ticketsLength}
};
