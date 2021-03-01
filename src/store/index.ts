import { createStore } from 'redux';

import { allUsers, lancamentosUsers } from './modules/user/reducer';

export const store = createStore(allUsers);

export const storeLanca = createStore(lancamentosUsers);
