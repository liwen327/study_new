/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-01-19 06:56:07
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-01-23 07:11:18
 * @FilePath: /react-staging/src/components/Header/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import propTypes from 'prop-types'

export default class Header extends Component {
  // 对传入的类型进行校验
  static propTypes = {
    addTodo:propTypes.func.isRequired
  }
  // 增加todo的事件回调
  keyUpEvent = (event)=>{
    console.log('keyup事件',event.target.value)
    let {target,keyCode} = event
    if(keyCode !== 13) return
    if(target.value.trim() === ''){
      alert('输入不能为空！')
      return;
    }
    // let {addTodo} = this.props
    let obj = {
      id:nanoid(),
      name:target.value,
      done:false
    }
    this.props.addTodo(obj)
    target.value = ''

  }
  render() {
    return (
      <div>
        <input type="text" onKeyUp={this.keyUpEvent} placeholder="请输入你的任务" />
      </div>
    )
  }
}
