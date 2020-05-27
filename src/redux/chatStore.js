import { createStore } from 'redux'

const initialState = {
    email: 'mrizkyff@gmail.com',
    password: '123',
    loginSuccess: false,
}


function chatStore(state = initialState, action){
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                email: action.payload.email,
                loginSuccess: true
            }    
        default:
            return state
    }
}

export default createStore(chatStore);