import {SAVE_ACCOUNT} from "../constant";

const initState = ''

export  default  function headerReducer(preState=initState,action){
    const {type,data} = action
    switch (type){
        case SAVE_ACCOUNT:
            return preState = data
        default:
            return preState
    }
}
