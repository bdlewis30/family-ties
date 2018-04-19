import axios from "axios";

const initialState = {
    user: {},
    admin: {
        uploadedImgCloudinaryUrl: '',
        familyName: ''
    }
}
console.log('Users from redux:', initialState.user)

const GET_USER_INFO = 'GET_USER';
const FAMILY_NAME = 'FAMILY_NAME';
const FAMILY_IMAGE = 'FAMILY_IMAGE';
const LOG_IN_OUT = 'LOG_IN_OUT';

export function getUserInfo() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function LOGINOUT(boo) {
    return {
        type: LOG_IN_OUT,
        payload: boo
    }
}

export function addFamilyName(name){
    return {
        type: FAMILY_NAME,
        payload: name
    }
}

export function familyImage(image){
    return {
        type: FAMILY_IMAGE,
        payload: image
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case FAMILY_NAME:
            return {admin: {familyName: action.payload}}
        case FAMILY_IMAGE:
            return Object.assign({}, state,{uploadedImgCloudinaryUrl: action.payload})
        case LOG_IN_OUT:
            return Object.assign({}, state, { loggedin: action.payload })
        default:
        return state
    }
}