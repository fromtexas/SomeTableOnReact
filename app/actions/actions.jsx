import * as api from 'API'
import moment from 'moment'


export var addTickets = (tickets) => {
  return {
    type: 'ADD_TICKETS',
    tickets
  }
};


export var addCurrentFilter = (filterVal) => {
  return {
    type: 'ADD_CURRENT_FILTER',
    filterVal
  }
};

export var addSearchText = (searchText) => {
  return {
    type: 'ADD_SEARCH_TEXT',
    searchText
  }
}

export var getTicketsByDate = (currentDate) => {
  return {
    type: 'GET_TICKETS_BY_DATE',
    currentDate
  }
}

export var addDatesArr = (datesArr) => {
  return {
    type: 'ADD_DATES_ARR',
    datesArr
  }
}


export var getCurrentStatus = (currentStatus) => {
  return {
    type: 'GET_CURRENT_STATUS',
    currentStatus
  }
}



export var startGetTickets = () => {
  return (dispatch, getState) => {
    return  api.getJson().then((res) => {
      dispatch(addTickets(res));


      var dates = res.map((item) => {
        return item.updated_at
      });

      var noDupe = Array.from(new Set(dates));

      var datesUnix = noDupe.map((item) => {
        var date = api.dateLocal(item);
        return date
      })

      var todayIs = moment().unix();

      todayIs = api.dateLocal(todayIs)

      dispatch(addDatesArr(datesUnix));
      dispatch(getTicketsByDate(todayIs));
    });
  }
};
