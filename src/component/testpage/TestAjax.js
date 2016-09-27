/**
 * Created by chenshy on 2016/8/15.
 */
import React from 'react';
import {Link} from 'react-router'
import * as actions from '../../actions/test/testajax'
import {connect} from 'react-redux'
import {Page} from '../common/ui'
import Navigator from './Navigator'
import {bindActionCreators} from 'redux'
import pureRender from 'react-addons-pure-render-mixin'
import {iRenderMixin} from '../../utils'
// console.log(iRenderMixin);
let TestAjax = React.createClass({
    mixins: [iRenderMixin],
    deleteItem(e){
        let userName = $(e.currentTarget).attr("data-name");
        console.log(userName);
        this.props.deleteItem(userName);
    },
    componentDidEnter(){
        console.log("enter");
    },
    render(){
        const {getData,deleteItem} = this.props;
        console.log("render");
        return (
            <Page id='test-ajax'>
               <Navigator/>
               <button style={{fontSize:'40px'}} onTouchTap={getData}>加载</button>
               <ul style={{fontSize: '40px'}}>
               {
                   this.props.list.map((item,i) => {
                       return (
                           <li key={i} style={{height:"80px",lineHeight:"80px"}}>
                               姓名：{item.userName}{'    '}
                               年龄：{item.age}{'    '}
                               性别：{item.sex}
                               {' '}
                               <button style={{fontSize:'40px'}} onTouchTap={this.deleteItem} data-name={item.userName}>删除</button>
                           </li>
                       );
                   })
               }
               </ul>
            </Page>
        );
    }
});

let mapStateToProps = (state) => {
    const {testajax} = state;
    const list = testajax.list;
    // console.log(list,state);
    return {
        list
    } 
}

let mapDispatchToProps = (dispatch) => {
    // console.log(actions);
    return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(TestAjax);
