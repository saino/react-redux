/**
 * Created by chenshy on 2016/8/16.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import user from './user'
import testajax from './testajax'

//console.log("ggg",userData);
const rootReducer = combineReducers({
    user,
    testajax,
    routing: routerReducer
});

export default rootReducer;