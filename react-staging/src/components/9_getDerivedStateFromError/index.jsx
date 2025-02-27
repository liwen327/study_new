/*
 * @Author: liwz
 * @Date: 2025-02-27 13:46:01
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-27 14:56:20
 * @FilePath: /study_new/react-staging/src/components/9_getDerivedStateFromError/index.jsx
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import Child from './child'

export default class Parent extends Component {
  state = {
    hasError: '' //用于标识子组件是否产生错误
  }
  // 生命周期函数，一旦后台组件报错，就会触发这个函数
  // 当Parent的子组件出现报错时候，会触发这个函数调用，并携带报错信息
  static getDerivedStateFromError(error) {
    console.log('error', error)
    // 在render之前触发，返回新的state
    return {
      hasError: error
    }
  }
  // 生命周期钩子码，当子组件报错时，会触发这个函数
  componentDidCatch(error, errorInfo) {
    console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决')
  }

  render() {
    return (
      <div>
        <h4>我是parent组件</h4>
        {/* 当Child组件报错时，会显示【当前网络不稳定，请稍后再试！】，否则正常显示【我是child组件】 */}
        {this.state.hasError ? <h2>当前网络不稳定，请稍后再试！</h2> : <Child />}
      </div>
    )
  }
}
