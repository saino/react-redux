/**
 * Created by chenshy on 2016/8/16.
 */
import * as c from '../constants';
import {createReducer} from '../utils'

// console.log(typeof localStorage.getItem('user'));
let userData =  { //localStorage.getItem('user') ? (JSON.parse(localStorage.getItem('user'))) :
    userName: null,
    isAuthenticated: false,
    token: null
};

export default createReducer(userData,{
    [c.USER_LOGIN]: (state, payload) => {  
        return userLogin(state, payload);
    },
    [c.USER_LOGOUT]: (state, payload) => { 
        return {};
    }
});

const userLogin = function(state, data){
    data.isAuthenticated = true;
    //state.user = data;
    setTimeout(function(){

        hashHistory.push("/main");
    },100);
    //console.log("after",state);
    localStorage.setItem('user',JSON.stringify(data));
    return data;
    //console.log("hhh");
}