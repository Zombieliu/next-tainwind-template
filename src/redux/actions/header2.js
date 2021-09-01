import {INCREMENT,DECREMENT} from "../constant";
import store from "../store";
const createIncrementAction = data => ({type:INCREMENT,data})
const createDecrementAction = data => ({type:DECREMENT,data})
const createIncrementAsyncAction = (data,time) => {
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
        },time)
    }
}

export {createIncrementAction,createDecrementAction,createIncrementAsyncAction}
