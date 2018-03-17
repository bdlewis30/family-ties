import axios from "axios";

const initialState = {
    users: {}
}


const LOG_IN_OUT = "LOG_IN_OUT"
const GET_USER = 'GET_USER';


export function GETUSER() {

    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then()
    }
}

export function LOGINOUT(boo) {
    return {
        type: LOG_IN_OUT,
        payload: boo
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload.data })
        case LOG_IN_OUT:
            return Object.assign({}, state, { loggedin: action.payload })
        default:
        return state
    }
}