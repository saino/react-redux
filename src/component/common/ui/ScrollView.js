// 文件名称: ScrollView.js
//
// 创 建 人: chenshy
// 创建日期: 2016/9/01 10:22
// 描    述: 
import './scrollview.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import Tappable from 'react-tappable'
import {animation,CSSCore} from '../../../utils'

let pullTopHeight = 100;
let pullBottomHeight = 100;
let distanceToRefresh = 70;
let resistance = 3;

let ScrollView = React.createClass({
    displayName: "ScrollView",
    getDefaultProps(){
        return {
            scrollY: true,//上下滚动
            height: '100%',//设置高度
            enableBounce: true,//是否开启回弹效果
            onScrollStart: null
        };
    },

    componentDidMount(){
        let dom = ReactDOM.findDOMNode(this);
        //console.log(dom);
        this.panConfig = {
            enabled: false,
            distance: 0,
            startPosY: 0,
            step: 0
        };
        // console.log("hahaha");
        //dom.panStartHandle = this.panStartHandle;
        let $dom = $(dom);

        $dom.on('touchstart',this.touchStartHandle);

        var hammer = new Hammer(dom);
        hammer.get('pan').set( { direction: Hammer.DIRECTION_VERTICAL } );

        hammer.on('panstart', this.panStartHandle);
        hammer.on('pandown', this.panDownHandle);
        hammer.on('panup', this.panUpHandle);
        hammer.on('panend', this.panEndHandle);

        this.scrollDom = $dom.find(".ui-scrollview")[0];
        this.contentEl = $dom.find(".ui-scrollview-content")[0];
        this.refreshEl = $dom.find(".ui-pulltorefresh")[0];
        //dom.pan
    },
    touchStartHandle(){
        if(!this.props.enableBounce){
            return;
        }
    },
    panStartHandle(e){
        console.log("panstart");
        this.panConfig.startPosY = this.scrollDom.scrollTop;
    },
    panDownHandle(e){
        if(!this.props.enableBounce){
            return;
        }
        let el = this.scrollDom;
        if(el.scrollTop > 0){
            return;
        }

        this.panConfig.enabled = true;

        e.preventDefault();
        this.panConfig.distance = (e.distance - this.panConfig.startPosY)  / resistance;

        // console.log(this.panConfig.distance);
        this.setContentPan();
        this.setRefreshEl();
        // console.log(el.scrollTop);

        // let y = el.transformOffset.y + e.distance;
        // console.log(y,el.minScrollTop,el.maxScrollTop);
    },
    panEndHandle(e){
        if(!this.props.enableBounce){
            return;
        }
        if(!this.panConfig.enabled){
            return;
        }

        // e.preventDefault();

        CSSCore.css3(this.contentEl,'transform','');
        CSSCore.css3(this.refreshEl,'transform','');
        this.panConfig.enabled = false;
        this.panConfig.step = 0;
        this.panConfig.startPosY = 0;

        this.scrollDom.scrollTop = 0;
    },
    panUpHandle(e){
        if ( !this.panConfig.enabled || this.panConfig.distance === 0 ) {
			return;
		}

		// e.preventDefault();
        let startPosY = this.panConfig.startPosY;

		if ( this.panConfig.distance < (e.distance - startPosY) / resistance ) {
			this.panConfig.distance = 0;
		} else {
			this.panConfig.distance = (e.distance - startPosY) / resistance;
		}

        // console.log(this.panConfig.distance );

		this.setContentPan();
        this.setRefreshEl();
    },
    setContentPan(){
        let s = 'translate3d(0,' + this.panConfig.distance + 'px,0)';
        // console.log(s);
        this.contentEl.style.transform = s;
    },
    setRefreshEl(){
        let distance = this.panConfig.distance;
        if(distance > pullTopHeight){
            distance = pullTopHeight;
            
        }

        if(this.panConfig.distance > pullTopHeight + 10){
            this.panConfig.step = 1;
            this.refreshEl.innerHTML = "松开刷新";
        }else{
            this.panConfig.step = 0;
            this.refreshEl.innerHTML = "下拉刷新";
        }
        let s = 'translate3d(0,' + distance + 'px,0)';
        this.refreshEl.style.transform = s;
    },
    render(){
        let {scrollY} = this.props;
        let overflowY = scrollY ? "scroll" : "hidden";
        let overflowX = "hidden";
        let childConfig = {
            overflowX: overflowX,
            overflowY: overflowY,
            height: 'calc(100% + '+ pullTopHeight +'px)',
            position: 'relative'
        };

        //touch-action: pan-x pan-y; -webkit-user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        let config = {
            height: this.props.height,
            overflow: 'hidden',
            touchAction: 'pan-x pan-y',
            'WebkitUserSelect': 'none',
            'WebkitUserDrag': 'none'
        };

        Object.assign(config,this.props.style);
       
        return (
            <div style={config}
                // onTouchStart={this.touchStartHandle}
                // onTouchMove={this.touchMoveHandle}
                // onTouchEnd={this.touchEndHandle}
                >
                <div style={childConfig} className="ui-scrollview">
                    <div className='ui-pulltorefresh'>下拉刷新</div>
                    <div className='ui-scrollview-content'>
                        {this.props.children }
                    </div>
                </div>
            </div>
        );
    },
    componentWillUnmount(){
        var dom = ReactDOM.findDOMNode(this);
        console.log("un mount");
        if(dom.boundEl){
            dom.boundEl = null;
            delete dom.boundEl;
        }
    }
});

export default ScrollView