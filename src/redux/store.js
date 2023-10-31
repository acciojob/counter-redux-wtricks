import {createStore} from 'redux';

import couterReducer from './counterReducer.js';

const store=createStore(couterReducer);

export default store ;