import {createStore,applyMiddleware,combineReducers} from "redux";

//引入reducers
import headerReducer from './reducers/header'
import header2Reducer from './reducers/header2'

const allReducers = combineReducers({
    header:headerReducer,
    header2:header2Reducer
})


//引入redux-thunk用于支持异步action

import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))


export default  store
