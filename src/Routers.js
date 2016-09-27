/**
 * Created by chenshy on 2016/8/17.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {requireAuthentication} from './component/user/AuthenticatedComponent'

import {MainPage} from './component/main';
import Login from './component/login/Login';

//app入口页
import App from './component/App'

const Routers = React.createClass({
    render(){
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App}>
                    <Route path="main" component={requireAuthentication(MainPage)}></Route>
                    <Route path="login" component={Login}></Route>
                </Route>
            </Router>
        );
    }
});

export default Routers;