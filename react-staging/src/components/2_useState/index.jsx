/*
 * @Author: liwz
 * @Date: 2024-09-04 15:30:46
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-04 15:50:16
 * @FilePath: /study_new/react-staging/src/components/2_useState/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'

// 类式组件
/* export default class demo extends Component {
  state = { count: 0 }

  add = () => {
    this.setState(state => {
      return (state.count = state.count + 1)
    })
  }

  render() {
    return (
      <div>
        <h2>求和为：{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
} */

// 函数式组件
function demo() {
  let [count, setCount] = React.useState(0)
  let [name, setName] = React.useState('tom') //有多少个状态就写多少个useState吗？也太麻烦了
  function add() {
    // 第一种写法
    // setCount(count + 1)
    // 第二种写法
    setCount(count => count + 1) //return 只有一句时可以省略掉{} 和return
  }

  function changeName() {
    setName('Jack')
  }
  return (
    <div>
      <h2>求和为：{count}</h2>
      <h3>我的名字是：{name}</h3>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我更改名字</button>
    </div>
  )
}

export default demo
