/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-01-19 07:05:48
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-01-24 06:59:23
 * @FilePath: /react-staging/src/components/Item/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 *
 */
import React, { Component } from 'react'

export default class Item extends Component {
  state ={
    mouse:false
  }
  // 鼠标移入、移出事件回调
  mouseChange = (flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }
  // 勾选、取消勾选事件回调
  handleChange = (id)=>{
    return (event)=>{
      let {target} = event
      console.log(id,target.checked)
      this.props.updateTodo(id,target.checked)

    }

  }
  // 删除事件回调
  delete = (id)=>{
    return ()=>{
      this.props.deleteHandle(id)
    }
  }
  render() {

    const {id,name,done} = this.props.item
    const {mouse }= this.state
    // console.log('items: ',item)
    return (
      <div style={{background:mouse?'#ddd':'#fff'}}  onMouseEnter={this.mouseChange(true)} onMouseLeave={this.mouseChange(false)}>
       {/* 此处不能使用defaultChecked,它只会在第一次起作用，应该使用checked，但是使用checked必须搭配onChange使用 */}
        <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
        <span>{name}</span>
        <button style={{display:mouse ? 'inline-block' :'none'}} onClick={this.delete(id)} >删除</button>
      </div>
    )
  }
}
