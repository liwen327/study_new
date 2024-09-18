/*
 * @Author: liwz
 * @Date: 2024-09-04 15:30:46
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-07 16:12:32
 * @FilePath: /study_new/react-staging/src/components/3_useEffect/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

/* // 类式组件
class demo extends Component{

} */

// 函数式组件
function demo() {
  let [count, setCount] = React.useState(0)

  // useEffect的回调函数中返回的那个函数就相当于ComponentWillUnmount生命周期，
  React.useEffect(() => {
    console.log('@')
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []) //如果不写[]，则谁都监测,相当于ComponentDidMount，如果写上[count]，则只监测count，

  // 卸载组件
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root')) //目前这句话报错：You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?              unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. Instead, have the parent component update its state and rerender in order to remove this component.
  }

  function add() {
    // 第一种写法
    // setCount(count + 1)
    // 第二种写法
    setCount(count => count + 1) //return 只有一句时可以省略掉{} 和return
  }

  let myRef = React.useRef()
  function show() {
    console.log(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>求和为：{count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示input框中的信息</button>
    </div>
  )
}
export default demo
