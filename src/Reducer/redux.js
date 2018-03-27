import axios from "axios";

const initialState = {
    users: {},
    admin: {
        mainFamImg: '',
        familyName: '',
        parents: [],
        famMembers: [],
        access: [],
        messageTwo: ''
    },
    familyMembers: {
        familyImg: '',
        familyName: '',
        posts: {
            postUserImg: '',
            postUserName: '',
            post: '',
            dateTime: '',
            image: '',
            video: '',
            likes: '',
            comments: ''
        }
    }
}

const LOG_IN_OUT = 'LOG_IN_OUT';
const GET_USER = 'GET_USER';
const FAMILY_NAME = 'FAMILY_NAME';
const ADD_FAMILY_MEMBERS = 'ADD_FAMILY_MEMBERS'

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

export function familyName(name){
    return {
        type: FAMILY_NAME,
        payload: name
    }
}

export function addFamilyMembers(names){
    return {
        type: ADD_FAMILY_MEMBERS,
        payload: names
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload.data })
        case LOG_IN_OUT:
            return Object.assign({}, state, { loggedin: action.payload })
        case FAMILY_NAME:
            return Object.assign({}, state, {familyName: action.payload})
        case ADD_FAMILY_MEMBERS:
            return Object.assign({}, state, {famMembers: action.payload})
        default:
        return state
    }
}