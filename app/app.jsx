import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'



import css from './style.less'
import foundation from '../node_modules/foundation-sites/dist/css/foundation.min.css'
import ionicons from '../node_modules/font-awesome/css/font-awesome.min.css'



import Main from 'Main'
import {configure} from 'configureStore'


var store = configure();








ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>,
          document.getElementById('app')
      );
