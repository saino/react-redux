// 文件名称: navigate.js
//
// 创 建 人: chenshy
// 创建日期: 2016/9/6 09:54
// 描    述:

let histories = [];

let navigate = {
    history: null,
    install(history){
        this.history = history;
        // console.log(history);
        history.listen(listenerFn);
    },
    /**
     * path 跳转utl
     * obj  type:back(后退)|forward(前进，默认，不用带参数) transitionName:可以自己指定的页动画名
     */
    push(path,obj){
        this.history.push({pathname:path,state:obj});
        return {
            type: 'NAVIGATE_PUSH',
            obj
        }
    },
    replace(path,obj){
        this.history.replace({pathname:path,state:obj});
        return {
            type: 'NAVIGATE_REPLACE',
            obj
        }
    },
    goBack(){
        histories.pop();
        let location = histories.pop();
        // console.log(location);
        if(location){
            let type = 'back',
                path = location.pathname;
                this.push(path,{type:type});
        }
        return {
            type: 'NAVIGATE_GOBACK'
        }
    }
};

let listenerFn = (location) => {
    // console.log(location);
    histories.push(location);
}

export default navigate;