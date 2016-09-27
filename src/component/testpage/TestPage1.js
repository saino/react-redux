/**
 * Created by chenshy on 2016/8/15.
 */

import React from 'react';
import {Link} from 'react-router'
import {login} from '../../actions/user'
import {connect} from 'react-redux'
import {Page,Header} from '../common/ui'

let Page1 = React.createClass({
    displayName: 'Page1',
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    go(){
        //console.log("hh");
        this.context.router.push("/page2",{type:'backward'});
    },
    back(){
        this.context.router.push({pathname:'/main',state:{type:'backward'}});

    },
    componentDidEnter(){
        console.log("didEnter");
    },
    leftHandler(e){
        // console.log(e,this);
        this.context.router.push({pathname:'/main',state:{type:'backward'}});
    },
    rightHandler(){

    },
    render(){
        // leftButtonText="返回"
        return (
            <Page id='testPage1'>
            <Header 
                title="testPage1"
                leftButtonIcon="auto"
                rightButtonText="广场"
                rightButtonIcon="images/drag.jpg"
                leftHandler={this.leftHandler}
                rightHandler={this.rightHandler}
            />
            </Page>
        );
    }
});


export default Page1;
