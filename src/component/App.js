/**
 * Created by chenshy on 2016/8/17.
 */
import './app.scss'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import PageCSSTransition from './common/animate/PageCSSTransition'

//console.log(ReactTransitionChildMapping,"FFFF")

const App = React.createClass({
    //mixins: [PageTransition],

    //propTypes: {
    //    component: React.PropTypes.any,
    //    childFactory: React.PropTypes.func
    //},
    //
    //getDefaultProps: function () {
    //    return {
    //        component: 'span',
    //        childFactory: function(arg){return arg;}
    //    };
    //},
    //
    //getInitialState() {
    //    return {
    //        children: ReactTransitionChildMapping.getChildMapping(this.props.children)
    //    };
    //},

    componentWillEnter(callback){
        console.log("onEnter");
    },

    componentWillMount(){
        // console.log(arguments)
    },
    componentWillUpdate(){

    },
    
    render(){
        //var childrenToRender = [];
        //for (var key in this.state.children) {
        //    var child = this.state.children[key];
        //    if (child) {
        //        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
        //    }
        //}
        //
        //// Do not forward ReactTransitionGroup props to primitive DOM nodes
        //var props = _assign({}, this.props);
        //delete props.childFactory;
        //delete props.component;
        //
        //return React.createElement(this.props.component, props, childrenToRender);

        return (
            //<ReactCSSTransitionGroup transitionName="cover" transitionEnterTimeout={50000} transitionLeaveTimeout={30000}>
            //    {this.props.children}
            //</ReactCSSTransitionGroup>

            <PageCSSTransition transitionName="cover">
                {
                    React.cloneElement(this.props.children,{ key: this.props.location.pathname })
                }
            </PageCSSTransition>

            //<ReactCSSTransitionGroup
            //    transitionName="example"
            //    transitionEnterTimeout={50000}
            //    transitionLeaveTimeout={30000}
            //    >
            //    {
            //        React.cloneElement(this.props.children,{ key: this.props.location.pathname })
            //    }
            //</ReactCSSTransitionGroup>
        );
    }
});


export default App;