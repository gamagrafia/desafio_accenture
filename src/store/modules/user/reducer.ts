import { Reducer } from 'redux';

import { IUserState } from '../../modules/user/interfaces';
import { IUser } from './interfaces';
import { Types } from './types';

const INITIAL_STATE: IUserState = {
    users: [],
    
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

