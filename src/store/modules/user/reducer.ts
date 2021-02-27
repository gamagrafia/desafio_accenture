import { Reducer } from 'redux';

import { IDataAccount, IDataAccountState, IUserState } from '../../modules/user/interfaces';
import { IUser } from './interfaces';
import { Types } from './types';

const INITIAL_STATE: IUserState = {
    users: [],
    
}

const INITIAL_DATA_ACCOUNT: IDataAccountState = {
    lancamentos: [],
}

export const allUsers: Reducer<IUser | any> = (state = INITIAL_STATE.users, action) => {
    switch (action.type) {
        case Types.LOGIN: {
            console.log('login', action.payload);

            const userContent = action.paylod;

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

            //const userContent = action.paylod;

            return {
                ...state,
                lancamentos: [
                    action.payload.dataAccount
                ]
            }
        };

        default:
            return state

    }

}

