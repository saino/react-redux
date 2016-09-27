/**
 * Created by chenshy on 2016/8/17.
 */
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import {requireAuthentication} from '../component/user/AuthenticatedComponent'

import {MainPage} from '../component/main';
import Login from '../component/login/Login';
import {TestAjax,Page2,Page3,Page4,Page5,Page6} from '../component/testpage';

//app
import App from '../component/App'

// function onEnter(nextState, transition, callback){
//     console.log(nextState);
//     callback();
// }

const Routers = React.createClass({
    render(){
        // console.log("ggg");
        return (
            <Router history={this.props.history}>
                <Route path="/" component={App} >
                    <Route path="main" component={MainPage}></Route>
                    <Route path="login" component={Login}></Route>
                    <Route path="testAjax" component={TestAjax}></Route>
                    <Route path="page2" component={Page2}></Route>
                    <Route path="page3" component={Page3}></Route>
                    <Route path="page4" component={Page4}></Route>
                    <Route path="page5" component={Page5}></Route>
                    <Route path="page6" component={Page6}></Route>
                </Route>
            </Router>
        );
    }
});

export default Routers;