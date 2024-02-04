import { createStore } from "redux";

import socialMediaReducers from "./reducers/socialMediaReducer";


const store = createStore(socialMediaReducers);

export default store;