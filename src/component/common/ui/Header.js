// 文件名称: header.js
//
// 创 建 人: chenshy
// 创建日期: 2016/8/23 17:50
// 描    述: 通用header
import './header.scss'
import React from 'react'
import {backImage} from './icon'
import classnames from 'classnames'
import Button from './Button'
// import Tappable from 'react-tappable'

const Header = React.createClass({
    displayName: 'Header',
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps(){
        // console.log("ge defal");
        return {
            title: 'Title',
            leftButtonText: null,
            leftButtonIcon: null,
            rightButtonText: null,
            rightButtonIcon: null,
            leftHtml: null,
            rightHtml: null,
            titleHtml: null,
            leftHandler: null,
            rightHandler: null,
            enableLeftButton: true,
            enableRightButton: true
        }
    },
    _getButtonHtml(type,icon,text){
        let html = "";

        if(icon || !text){
            if(icon === 'auto' && type == 'left'){
                icon = backImage;
            }
            // else if(!text && !icon && type == 'left'){
            //     icon = backImage;
            // }
            if(icon){
                html += "<img class='lt-header-icon' src='"+ icon +"'>";
            }
        }

        if(text){
            let className = "";
            if(!icon){
                if(type == 'left'){
                    className = 'lt-header-left-text';
                }else{
                    className = 'lt-header-right-text';
                }
            }

            let textHtml = "<div class='lt-header-text "+ className +"'>"+ text +"</div>";

            if(type == 'left'){
                html += textHtml;
            }else{
                html = textHtml + html;
            }
        }
        // console.log(icon,text);
        return html;
    },

    leftButtonEvent(e){
        // console.log(e.target);
        if(this.props.leftHandler){
            this.props.leftHandler(e);
        }else{
            // console.log(this.context.router);
            // location.key = {type:'backward'};
            // this.context.router.setState({type:'backward'});
            // this.context.router.goBack();
            //this.context.router.push({pathname:'/main',state:{type:'backward'}});
        }
    },

    rightButtonEvent(e){

    },
    render(){
        
        let className = classnames('lt-navbar',this.props.className);
        let {
             titleHtml,title,leftHtml,rightHtml,
             leftButtonIcon,leftButtonText,
             rightButtonIcon,rightButtonText
            } = this.props;

        if(!titleHtml){
            titleHtml = "<div class=\"lt-navbar-header-title\">"+ title +"</div>";
        }

        if(!leftHtml){
            leftHtml = this._getButtonHtml("left",leftButtonIcon,leftButtonText);
        }

        if(!rightHtml){
            rightHtml = this._getButtonHtml("right",rightButtonIcon,rightButtonText);
        }
        // console.log("rightHtml",titleHtml);
        // console.log(leftButtonIcon,leftButtonText);
        return (

            <header className={className}>
                <ul>
                    <li dangerouslySetInnerHTML={{__html:titleHtml}} />
                   
                    <li className="lt-header-left-li"  dangerouslySetInnerHTML={{__html:leftHtml}}/>

                    <li className="lt-header-right-li"  dangerouslySetInnerHTML={{__html:rightHtml}}/>
                    
                </ul>
            </header>
        );
    }
});

export default Header;