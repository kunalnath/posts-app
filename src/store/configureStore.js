import { createStore , combineReducers , applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import postReducer from '../reducers/postReducer'
// ,applyMiddleware(thunk)
const configureStore = () =>{
    console.log('localStorage.getItem(session)',localStorage.getItem('session'))
    const persistedState = localStorage.getItem('session') ? JSON.parse(localStorage.getItem('session')) : {}
    const store = createStore(combineReducers({

        postInfo :  postReducer,
        persistedState : persistedState
            
    }))
    return store   
}

export default configureStore