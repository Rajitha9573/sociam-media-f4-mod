import { API_STARTED, DATA_SUCCESS, DATA_FAILURE } from "../Actions/actionTypes";



const initialState = {
    loading : false,
    data : [],
    error : ""

}


const socialMediaReducers = (state = initialState , action) => {

    switch(action.type) {
        case  API_STARTED : return { ...state, loading : true};

        case DATA_SUCCESS : return {...state,  data : action.payload, loading:false, error : "" };

        case DATA_FAILURE : return {...state, data :[], loading: false, error : action.payload};

         default :  return state
    }

}

export default socialMediaReducers;