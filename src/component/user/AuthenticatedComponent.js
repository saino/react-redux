/**
 * Created by chenshy on 2016/8/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

//登陆验证
export function requireAuthentication(Component){
    let AuthenticatedComponent = React.createClass({
        contextTypes: {
            router: React.PropTypes.object.isRequired
        },

        componentWillMount(){
            this.checkAuth();
        },

        componentWillReceiveProps(nextProps){
            this.checkAuth();
        },

        checkAuth(){
            console.log("check",this.props.isAuthenticated);
            if(!this.props.isAuthenticated){
                let redirectAfterLogin = this.props.location.pathname;
                //console.log(this.props.dispatch);
                //this.context.router.push("/login");
                this.props.dispatch(
                    push(`/login?redirect=${redirectAfterLogin}`)
                )
            }
        },

        render(){
            return (
            <div>
                {this.props.isAuthenticated === true
                    ? <Component {...this.props}/>
                    : null
                }
            </div>
            );
        }
    });

    //const mapStateToProps = (state) => ({
    //    token: state.user.token,
    //    userName: state.user.userName,
    //    isAuthenticated: state.user.isAuthenticated
    //});

    const mapStateToProps = (state) => {

        console.log("mainpage",state);
        return {
            token: state.user.token,
            userName: state.user.userName,
            isAuthenticated: state.user.isAuthenticated
        }
    };

    return connect(mapStateToProps)(AuthenticatedComponent);
}