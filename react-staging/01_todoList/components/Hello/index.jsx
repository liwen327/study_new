/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2024-01-17 06:49:08
 * @LastEditors: liwz liwz@yonyou.com
 * @LastEditTime: 2024-01-17 06:56:02
 * @FilePath: /react-staging/src/components/Hello/index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{Component} from 'react'
import './index.css'

export default class Hello extends Component{
  render(){
    return (
      <div>
        <h2 className={'title'}>Hello,react!</h2>
      </div>
    )
  }
}