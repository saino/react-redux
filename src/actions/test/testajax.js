import c from '../../constants';
import {fetch} from '../../utils'

function receiveData(data) {
    // console.log("cc",c.ReceiveData);
    // console.log(data);
    return {
        type: c.ReceiveData,
        data
    }
}

function requestData(){
    // console.log("request");
    return dispatch => {
        return fetch("/testdata/testajax.json")
        .then(response => response.json())
        .then(json => dispatch(receiveData(json)));
    }
}

function checData(state) {
    let list = state.testajax.list;
    // console.log(state);
    if (!list || list.length == 0) {
        return false;
    }

    return true;
    // if(!name){
    //     return true;
    // }

}

export function getData() {
    return (dispatch, getState) => {
        if (!checData(getState())) {
            return dispatch(requestData());
        }
    }
}

export function deleteItem(name){
    return {
        type: c.DeleteData,
        name
    }
}