/**
 * Created by chenshy on 2016/8/15.
 */

import React from 'react';
import {Link} from 'react-router'
import {login} from '../../actions/user'
import {connect} from 'react-redux'
import {Page} from '../common/ui'

let Page6 = React.createClass({

    render(){
        return (
            <Page >
            <Link to="/page5">后退</Link>
            <br/>
            page6<br/>
           
            </Page>
        );
    }
});


export default Page6;
