/*
 * @Author: liwz
 * @Date: 2024-09-03 16:34:18
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-04 14:51:24
 * @FilePath: /study_new/react-staging/src/components/1_setState/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'

export default class demo extends Component {
  state = {
    count: 0
  }

  // 对象式的setState
  add = () => {
    // 1、第一种写法  对象式写法
    /* let { count } = this.state
    this.setState({ count: count + 1 }, () => {
      console.log('count:', this.state.count) //想要获取最新的count值，就需要在回调函数中获取，不然获取不到
    }) */
    // 第二种写法  函数式写法
    this.setState((state, props) => {
      return { count: state.count + 1 }
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
