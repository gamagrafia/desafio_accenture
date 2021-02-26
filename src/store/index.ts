import { createStore } from 'redux';

import allUsers from './modules/user/reducer';

const store = createStore(allUsers);

export default store;
