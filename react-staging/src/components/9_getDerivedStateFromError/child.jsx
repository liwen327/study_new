/*
 * @Author: liwz
 * @Date: 2025-02-27 13:46:29
 * @LastEditors: liwz
 * @LastEditTime: 2025-02-27 14:09:40
 * @FilePath: /study_new/react-staging/src/components/9_getDerivedStateFromError/child.jsx
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    /* stus: [
      { id: '001', name: '张三', age: 18 },
      { id: '002', name: '李四', age: 19 },
      { id: '003', name: '王五', age: 20 }
    ] */
    stus: 'abc'
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.stus.map(item => {
            return (
              <li key={item.id}>
                {item.name}-----{item.age}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
