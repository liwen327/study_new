/*
 * @Author: liwz
 * @Date: 2024-09-03 16:34:18
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-03 16:54:49
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
    let { count } = this.state
    this.setState({ count: count + 1 }, () => {
      console.log('count:', this.state.count)
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
