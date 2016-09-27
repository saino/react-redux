/**
 * Created by chenshy on 2016/8/22.
 */

/**
 * 创建reducer
 * @param initState 初始化的state
 */
export function createReducer(initState, reducerMap){
    return (state = initState, action = {}) => {
        const reducer = reducerMap[action.type];
        // console.log("action",action);
        return reducer
            ? reducer(state, action)
            : state;
    }
}

//提供addClass removeClass
export CSSCore from './CSSCore'

//注入tap事件 的库
export injectEvent from './injectEvent'

//提供ajax的库
export fetch from 'isomorphic-fetch'

// export puerRenderMixin from 'react-addons-pure-render-mixin'

export iRenderMixin from 'react-immutable-render-mixin'

//下拉刷新库
export PullToRefresh from 'react-pull-to-refresh'