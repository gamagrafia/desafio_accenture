import { IUser } from './interfaces';
import { Types } from './types';

export const ActionsCreators  = {
    
    login: (user:IUser) => ({
        type: Types.LOGIN,
        payload: {
            user
        }
    }),

    update_pass: (senha:IUser) => ({
        type:Types.UPDATE_PASS,
        payload:{
            senha
        }
    }),

   

       
}


