import { IDataAccount, IUser } from './interfaces';
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

    lancamento: (dataAccount: IDataAccount) => ({
        type: Types.LANCAMENTOS,
        payload:{
            dataAccount
        }
    })

       
}


