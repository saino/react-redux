/**
 * Created by chenshy on 2016/8/11.
 */
//import style from "../css/style.scss";
import ReactDOM from "react-dom";
import React from "react";
import {Router, Route, Link, IndexRoute, browserHistory } from 'react-router';//hashHistory browserHistory
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider, dispatch } from 'react-redux'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import thunk from 'redux-thunk'

import Routers from './router/Routers'

import rootReducer from './reducers'

import navigate from './router/navigate'

import {injectEvent} from './utils'


injectEvent();

const routingMiddleware = routerMiddleware(browserHistory);

const middleware = applyMiddleware(routingMiddleware, thunk);
//gg
let DevTools,
    store;
if (process.env.NODE_ENV === 'development') {
    DevTools = require("./tools/DevTools");
    const enhancer = compose(
        middleware,
        DevTools.instrument()
    );

    store = createStore(
        rootReducer,
        enhancer
    );
} else {
    store = createStore(
        rootReducer,
        
    );
}

//console.log(store.getState());

const history = syncHistoryWithStore(browserHistory, store);
// console.log(history)
navigate.install(history);

ReactDOM.render((() => {
    if (process.env.NODE_ENV === 'development') {
        return (
            <Provider store={store} >
                <div>
                    <Routers history={history}></Routers>
                    <DevTools/>
                </div>
            </Provider>
            
        )
    } else {
        return (
            <Provider store={store} >
                <Routers history={history}></Routers>
            </Provider>
            //<MainPage></MainPage>
        )
    }

})(), document.getElementById("lt-viewport"));
