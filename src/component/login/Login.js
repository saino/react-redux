/**
 * Created by chenshy on 2016/8/15.
 */
import './login.scss'
import React from 'react';
import {Link} from 'react-router'
import {login} from '../../actions/user'
import {connect} from 'react-redux'
import {Page} from '../common/ui'
//import loginModel from'../../../src/model/login/loginModel';
//alert("GG")
let Login = React.createClass({
    handleSubmit(e){
        e.preventDefault();
        var valObj = this.props.form.getFieldsValue();
        if(valObj.userName === '' || valObj.pwd === ''){
            alert("请输入用户名和密码");
            return;
        }
        this.props.dispatch(login({
            userName: valObj.userName,
            pwd: valObj.pwd
        }));
        //this.props.history.push("/main");
    },
    render(){
        return (
            <Page id="login-page">
            <Link to="/main">转到首页</Link>
            这是首页XXX
            </Page>
        );
    }
});


export default connect()(Login);
