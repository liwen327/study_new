/*
 * @Author: liwz
 * @Date: 2024-09-10 16:25:10
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-10 17:09:00
 * @FilePath: /study_new/react-staging/src/components/6_PureComponent/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component, PureComponent } from 'react'

export default class Parent extends PureComponent {
  state = { carName: '宝来' }
  changeCar = () => {
    // this.setState({}) // 无变化则不调用render
    this.setState({ carName: '奥迪' }) // 有变化则调用render
  }

  /* // 重写shouldComponentUpdate()方法，当状态有变化时再去render
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state)
    console.log(nextProps, nextState)
    return !(this.state.carName === nextState.carName)
    // return true
  } */
  render() {
    // 初始时加打印一次，因为初始时需要渲染，点击换车按钮会再打印一次，因为state状态改变了，需要再次render，渲染界面，但是如果点击换车按钮，给setState传的是空数组，相当于晃了一下，那就不应该再render了。解决方案：1、重写shouldComponentUpdate()方法。2、使用pureComponent
    console.log('parent------ render')
    let { carName } = this.state

    return (
      <div>
        <h4>我的车是：{carName}</h4>
        <br />
        <button onClick={this.changeCar}>点击换车</button>
        <Child carName={carName}></Child>
      </div>
    )
  }
}

// 子组件
class Child extends PureComponent {
  /* // 重写shouldComponentUpdate()方法，当状态有变化时再去render
  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props, this.state)
    console.log(nextProps, nextState)
    return !this.props.carName === nextProps.carName
  } */
  render() {
    console.log('child------ render')
    let { carName } = this.props

    return (
      <div>
        <h4>我接收到的的车是：{carName}</h4>
        <br />
      </div>
    )
  }
}
