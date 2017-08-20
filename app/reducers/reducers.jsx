
export var ticketsReducer = (state =[], action) => {
  switch (action.type) {
    case 'ADD_TICKETS':
    return action.tickets ;
    default:
    return state;
  }
};

export var currentFilterReducer = (state='id', action) => {
  switch (action.type) {
    case 'ADD_CURRENT_FILTER':
    return action.filterVal ;
    default:
    return state;
  }
};

export var searchTextReducer = (state='', action) => {
  switch (action.type) {
    case 'ADD_SEARCH_TEXT':
    return action.searchText ;
    default:
    return state;
  }
}

export var currentDateReducer = (state='', action) => {
  switch (action.type) {
    case 'GET_TICKETS_BY_DATE':
    return action.currentDate;
    default:
    return state;
  }
}

export var datesArrReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_DATES_ARR':
    return action.datesArr;
    default:
    return state;
  }
}

export var currentStatusReducer = (state='Open', action) => {
  switch (action.type) {
    case 'GET_CURRENT_STATUS':
    return action.currentStatus;
    default:
    return state;
  }
}
