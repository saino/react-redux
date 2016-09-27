// 文件名称: Button.js
//
// 创 建 人: chenshy
// 创建日期: 2016/8/31 09:23
// 描    述: 
import "./button.scss"
import React from 'react'
import classnames from 'classnames'
import blacklist from 'blacklist'
// import Tappable from 'react-tappable'

let Button = React.createClass({
    displayName: 'Button',
    propTypes: {
        // children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string
    },

    render(){
        var className = classnames('ui-button', this.props.className);
        var props = blacklist(this.props,'type');
        return (
            <div/>
            // <Tappable {...props} className={className} component="div">
            // </Tappable>
        );
    }
});

export default Button