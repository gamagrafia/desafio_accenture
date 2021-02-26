import { Reducer } from 'redux';

import { IUser, IUserState } from './interfaces';

const INITIAL_STATE: IUserState = {
    users: []
}

const allUsers: Reducer<IUser | any> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGIN': {
            // console.log(action.payload);
            const userContent = action.paylod;


            return {
                ...state,
                users: [
                    ...state.users,
                    userContent
                ]
            }

        }

        default:
            return state

    }

}

export default allUsers;