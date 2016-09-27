import c from '../constants';
import {createReducer} from '../utils'

let data = {
    list: []
};

export default createReducer(data,{
    [c.ReceiveData]: (state, action) => {
        // console.log("come",payload);
        var obj = Object.assign({},state,{
            list: action.data
        })

        console.log(obj);
        return obj;
    },
    [c.DeleteData]: (state,action) => {
        let obj = Object.assign({},state);
        let list = obj.list;
        let newlist = [];
        let name = action.name;
        for(let i = 0; i < list.length; i++){
            if(list[i].userName == name){
                list.splice(i,0);
            }else{
                newlist.push(Object.assign({},list[i]));
            }
        }

        
        obj.list = newlist;
// console.log(list,name,obj);
        return obj;
    }
});