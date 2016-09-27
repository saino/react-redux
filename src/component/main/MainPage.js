/**
 * Created by chenshy on 2016/8/11.
 */
import React from "react"
import {Link} from 'react-router'
import MenuList from "./MenuList"
import {connect} from 'react-redux'
import {logoutAndRedirect} from '../../actions/user'
import {Page,Header,Button,ScrollView} from '../common/ui'
// import Tappable from 'react-tappable'
import navigate from '../../router/navigate'

import Navigator from '../testpage/Navigator'

import {PullToRefresh} from '../../utils'
//首页
const MainPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState(){
        //fff
        return {
            scrollY: true
        }
    },

    componentWillEnter(callback){
        console.log("onEnter");
    },

    componentDidUpdate(preProp){
        //console.log("GG");
        // console.log("mainPage",this.props.location.state);
    },

    logout(){
        this.props.dispatch(logoutAndRedirect());
    },

    divTap(){
        console.log("divTap");
    },

    refreshHandle(){

    },

    btnHandle(){
        this.props.dispatch(logoutAndRedirect());
    },
    render(){ 
        //  console.log(navigate.history.setState({f:'ff'}));
        return (
            <Page id="main-page" >
                <Header/>
                 <Button>ddddd</Button>
            <Link to="/page1">前进</Link>
            <Navigator/>
            
            <ScrollView style={{fontSize:"40px"}} scrollY={this.state.scrollY} height='calc(100% - 200px)'>

               <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>
              <img src="images/090fbc21e02dae23a8d2.jpg"/>

            </ScrollView>
            
            </Page>
        );
    }
});

const mapStateToProps = (state) => {
    //console.log("mainPagess",state);
    return {
        userName: state.user.userName
    }
};

export default connect(mapStateToProps)(MainPage);
//}