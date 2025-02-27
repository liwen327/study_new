/*
 * @Author: liwz
 * @Date: 2025-02-27 10:25:50
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-27 11:02:29
 * @FilePath: /study_new/react-staging/src/components/8_renderProps/index.jsx
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */

import React from 'react'
import { Component } from 'react'
import './index.css'
/* export default function index() {
  return <div></div>
} */

export default class Parent extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是parent组件</h3>
        {/* 1、使用B嵌套到A组件中 */}
        {/* <A>
          <B></B>
        </A> */}
        {/* 2、使用renderProps 使B组件作为A组件的子组件 */}
        <A render={name => <B name={name} />}>{/* <B></B> */}</A>
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    const { name } = this.state
    return (
      <div className="a">
        <h3>我是A组件</h3>
        {/* 最原始的写法 */}
        {/* <B name={this.state.name}></B> */}
        {/* 1、对应上面第一种写法 通过this.props.children获取到B组件 */}
        {/* {this.props.children} */}
        {/* 2、对应上面第二种写法 通过this.props.render获取到B组件 ，这里相当于预留了一个位置，在A组件中插入想放放入的组件，相当于vue的插槽*/}
        {this.props.render(name)}
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className="b">
        <h3>我是B组件</h3>
        {this.props.name}
      </div>
    )
  }
}
