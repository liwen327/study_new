/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-01-16 07:02:29
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-01-24 07:05:16
 * @FilePath: /react-staging/src/App.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { render } from '@testing-library/react'
import React,{Component} from 'react'
// import Hello from './components/Hello'
// import Welcome from './components/Welcome'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component{
  state = {
    todos: [
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'写代码',done:false}
    ]
  }
  // 增加一个todo的回调
  addTodo=(obj)=>{
    const {todos} = this.state
    const newTodos = [obj,...todos]
    this.setState({
      todos:newTodos
    })
  }
  // Item中的勾选的回调
  updateTodo=(id,checked)=>{
    console.log('flag: ',this.state)
    const {todos} = this.state
    let newTodos = this.state.todos.map(item=>{
      if(item.id === id){
        return {...item,done:checked}
      }else{
        return item
      }
    })
    console.log('newTodos: ',newTodos)
    this.setState({
      todos:newTodos
    })
  }
  // 删除事件回调
  deleteHandle = (id)=>{
    const {todos} = this.state
    let newTodos = todos.filter(item=>{
      return item.id !==id
    })
    this.setState({
      todos:newTodos
    })
  }
  // 全选、取消全选回调
  handleCheck=(done)=>{
    let {todos} = this.state
    let newTodos = todos.map(item=>{
      return {...item,done:done}
    })
    console.log('newTodos11: ',newTodos)
    // 更新状态
    this.setState({
      todos:newTodos
    })
  }
  // 删除所有已完成的回调
  clearAllDone=()=>{
    let {todos } = this.state
    let newTodos = todos.filter(item=>{
      return item.done === false
    })
    // 更新状态
    this.setState({
      todos:newTodos
    })
  }
  render(){
    const {todos} = this.state
    return (
      <div className='todoListWrap'>
        <Header todos={todos} addTodo={this.addTodo} />
        <List todos={todos} updateTodo={this.updateTodo} deleteHandle={this.deleteHandle}></List>
        <Footer todos={todos} handleCheck={this.handleCheck} clearAllDone={this.clearAllDone}></Footer>
      </div>
    )
  }

}
