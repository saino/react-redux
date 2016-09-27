/**
 * Created by chenshy on 2016/8/16.
 */
import * as constants from '../constants';
import navigate from '../router/navigate'

// console.log(constants);

/**用户登陆**/
export function login(data){

    return {
        type: constants.USER_LOGIN,
        payload
    }
}

/**用户登出**/
export function logout(){
    //TODO 删除localStorage
    localStorage.removeItem('user');
    return {
        type: constants.USER_LOGOUT
    }
}

export function logoutAndRedirect(){
    return (dispatch,state) => {
        dispatch(logout());
        // dispatch(navigate.push("/page1",{type:'back'}));
        dispatch(navigate.goBack());
    }
}