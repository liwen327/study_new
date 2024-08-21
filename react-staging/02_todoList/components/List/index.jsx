/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-01-19 06:51:19
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-01-23 07:16:14
 * @FilePath: /react-staging/src/components/List/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import propTypes from 'prop-types'
import Item from '../Item'

export default class List extends Component {
  static propTypes = {
    todos:propTypes.array.isRequired,
    updateTodo:propTypes.func.isRequired,
  }
  render() {
    const {todos,updateTodo,deleteHandle} = this.props
    // console.log('todos: ',todos)
    return (
      <div>
        {/* <Item></Item>
        <Item></Item> */}
        {
          todos.map(
            item=>{
              return <Item item={item} key={item.id} updateTodo={updateTodo}  deleteHandle={deleteHandle}></Item>
            }
          )
        }
      </div>
    )
  }
}
