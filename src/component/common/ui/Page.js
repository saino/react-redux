// 文件名称: page.js
//
// 创 建 人: chenshy
// 创建日期: 2016/8/24 9:15
// 描    述: page
import './page.scss'
import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'

const Page = React.createClass({
    render(){
        return (
            <div className='ui-view-transitioning lt-ui-page' id={this.props.id}>

                {this.props.children}

            </div>
        );
    }
});

export default Page;