import { API_STARTED, DATA_SUCCESS, DATA_FAILURE } from "./actionTypes";





export  const dataStarted = ()=>{

    return {
        type:API_STARTED,
        
    }
}

export  const dataSuccess = (data)=>{

    return {
        type:DATA_SUCCESS,
        payload:data
    }
}

export  const dataFailure = (error)=>{

    return {
        type:DATA_FAILURE,
        payload:error
    }
}