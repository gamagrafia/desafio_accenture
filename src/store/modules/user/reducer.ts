import { Reducer } from 'redux';

import { INITIAL_DATA_ACCOUNT, INITIAL_STATE } from '../../modules/user/initialState';
import { IDataAccount } from '../../modules/user/interfaces';
import { IUser } from './interfaces';
import { Types } from './types';

export const allUsers: Reducer<IUser | any> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.LOGIN: {
            console.log('login', action.payload);


            return {
                ...state,
                users: [
                    action.payload.user
                ]
            }
        };

        case Types.UPDATE_PASS: {
            console.log('senha', action.payload)
            
            return {
                ...state,
                users: [
                    action.payload.senha
                ]
            }
            
        }


        default:
            return state

    }

}

export const lancamentosUsers: Reducer<IDataAccount | any> = (state = INITIAL_DATA_ACCOUNT, action) => {
    switch (action.type) {
        case Types.LANCAMENTOS: {
            console.log('lancamentos', action.payload);


            return {
                ...state,
                lancamentosAccount: [
                    action.payload.dataAccount
                ]
            }
        };

        default:
            return state

    }

}

