/**
 * Created by chenshy on 2016/8/11.
 */
import React from "react"

const MenuList = React.createClass({
    getInitialState() {
        return {
            current: '1',
            openKeys: []
        };
    },

    handleClick(e) {
        window.location.hash = e.key; // 被点击元素的‘key’的值‘about’就是页面跳转的路径
        this.setState({
            current: e.key,
            openKeys: e.keyPath.slice(1)
        });
    },
    onToggle(info) {
        this.setState({
            openKeys: info.open ? info.keyPath : info.keyPath.slice(1)
        });
    },
    render(){
        return (
            <div></div>
        );
    }
});

export default MenuList;
