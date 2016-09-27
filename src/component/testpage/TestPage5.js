/**
 * Created by chenshy on 2016/8/15.
 */

import React from 'react';
import {Link} from 'react-router'
import {login} from '../../actions/user'
import {connect} from 'react-redux'
import {Page} from '../common/ui'

let Page5 = React.createClass({

    render(){
        return (
            <Page >
            <Link to="/page4">后退</Link>
            <br/>
            page5<br/>
            <Link to="/page6">前进</Link>
            </Page>
        );
    }
});


export default Page5;
