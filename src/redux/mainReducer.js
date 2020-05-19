import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth4322Reducer from '../features/EmailAuth4322/redux/reducers';
import EmailAuth4320Reducer from '../features/EmailAuth4320/redux/reducers';
import EmailAuth4319Reducer from '../features/EmailAuth4319/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth4322: EmailAuth4322Reducer,
EmailAuth4320: EmailAuth4320Reducer,
EmailAuth4319: EmailAuth4319Reducer,
EmailAuth: EmailAuthReducer,

});