/**
 * Created by chenshy on 2016/9/08.
 */
import React from 'react'
import navigate from '../../router/navigate'

let Navigator = React.createClass({
    go(e) {
        let path = $(e.currentTarget).attr('to');

        if (path) {
            navigate.push(path);
        }
    },
    render() {
        let style = {
            fontSize: '40px',
            marginTop: '120px'
        };
        return (
            <div style={style} className='navigator'>
                <span onTouchTap={this.go} to='/main'>首页</span>
                {' '}
                <span onTouchTap={this.go} to='/testAjax'>testAjax</span>

            </div>
        );
    }
});

export default Navigator