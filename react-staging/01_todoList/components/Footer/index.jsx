/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-01-19 06:57:50
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-01-24 07:06:00
 * @FilePath: /react-staging/src/components/Footer/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  // 全选、取消全选的回调
  handleChecked= (event)=>{
    this.props.handleCheck(event.target.checked)
  }
  // 清除所有已完成的工作
  clearAllDone = ()=>{
    this.props.clearAllDone()
  }
  render() {
    let {todos} = this.props
    // 方法1、过滤数组中done为true的元素
    // let newTodos = todos.filter(item=>{
    //   return item.done === true
    // })
    // 方法2、使用reduce方法，统计总共有几个完成的
    let doneCount = todos.reduce((pre,current)=>{return pre+(current.done ? +1 :0)},0)
    let total = todos.length
    return (
      <div className='footer_wrap'>
        <div>
          {/* 此处不能使用defaultChecked,它只会在第一次起作用，应该使用checked，但是使用checked必须搭配onChange使用 */}
          <input type="checkbox" checked={doneCount === total && total !=0 ? true : false} onChange={this.handleChecked} />
          <span>已完成{doneCount}</span>
          <span>全部{total}</span>
        </div>
        <button className={'ClearBtn'} onClick={this.clearAllDone}>清除已完成任务</button>

      </div>
    )
  }
}
