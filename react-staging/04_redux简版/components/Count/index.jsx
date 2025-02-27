/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-02-03 06:07:32
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-02-03 07:00:10
 * @FilePath: /react-staging/src/components/Count/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {
  state={
    count:0
  }
  // 加
  increment =()=>{
    const {value }= this.selectNumber
    let {count} = this.state
    this.setState({
      count:count + Number(value)
    })
  }
  // 加
  decrement =()=>{
    const {value }= this.selectNumber
    let {count} = this.state
    this.setState({
      count:count - Number(value)
    })
  }
  // 和为奇数时加
  incrementOdd =()=>{
    const {value }= this.selectNumber
    let {count} = this.state
    this.setState({
      count:count %2 ===1 ? count + Number(value) : count
    })
  }
  // 异步加
  incrementAsync =()=>{
    const {value }= this.selectNumber
    let {count} = this.state
    setTimeout(()=>{
      this.setState({
        count: count + Number(value)
      })
    },500)
  }
  render() {
    return (
      <div>
        {/* <h2>求各为：{this.state.count}</h2> */}
        <h2>求各为：{store.getState()}</h2>
        <select ref={c=>this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;&nbsp;
        <button onClick={this.increment}>加法</button> &nbsp;&nbsp;
        <button onClick={this.decrement}>减法</button> &nbsp;&nbsp;
        <button onClick={this.incrementOdd}>和为奇数时加</button> &nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>

      </div>
    )
  }
}
