// 文件名称: DevTools.js
//
// 创 建 人: chenshy
// 创建日期: 2016/9/8 10:20
// 描    述: redux开发工具
import React from 'react'
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

module.exports = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-b'
                 changePositionKey='ctrl-q'
                 defaultIsVisible={false}>
        <LogMonitor/>
    </DockMonitor>
);