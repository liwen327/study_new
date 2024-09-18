import React, { Component } from 'react'
import './index.css'

// 创建context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class A extends Component {
  state = {
    username: 'Tom',
    age: 18
  }
  render() {
    let { username, age } = this.state
    return (
      <div className="parent">
        <h3>我是A组件，我的用户名：{username}</h3>
        <Provider value={{ username, age }}>
          <B></B>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    // let { username, age } = this.props
    return (
      <div className="children">
        <h2>
          我是B组件，我从A组件获取的用户名：
          {/* {username},年龄是：{age} */}
        </h2>
        <C />
      </div>
    )
  }
}

/* // 仅适用于类式组件，因为类式组件有this，可以指向类组件的实例，函数式组件没有this
class C extends Component {
  // 声明接收context，contextType是固定的，声明拿的就是MyContext
  static contextType = MyContext
  render() {
    console.log('C接收到的context: ', this.context)
    let { username, age } = this.context
    return (
      <div className="grand">
        <h2>
          我是C组件，我从A组件获取的用户名：
          {username}，年龄是：{age}
        </h2>
      </div>
    )
  }
} */

function C() {
  return (
    <div className="grand">
      <h2>
        我是C组件，我从A组件获取的用户名：
        {/* {username}，年龄是：{age} */}
        <Consumer>
          {value => {
            console.log('value: ', value)
            return `${value.username},年龄：${value.age}`
          }}
        </Consumer>
      </h2>
    </div>
  )
}
