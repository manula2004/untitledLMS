import authReducer from './authReducer'
import eventReducer from './eventReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: eventReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer