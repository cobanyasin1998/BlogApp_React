
import { createStore, combineReducers } from "redux";
import blogReducer from '../reducers/blog';
import authReducer from '../reducers/auth';

export default () =>{
    const store = createStore(
        combineReducers({
          blogs: blogReducer,
          auth: authReducer,
        })
      );
      return store
}

