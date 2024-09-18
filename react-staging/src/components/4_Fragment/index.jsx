/*
 * @Author: liwz
 * @Date: 2024-09-07 16:21:57
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-07 16:27:18
 * @FilePath: /study_new/react-staging/src/components/4_Fragment/index.jsx
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component, Fragment } from 'react'

export default class Count extends Component {
  render() {
    return (
      //  空div标签不允许加任何属性，加了会报错
      /*  <div b="2">
        <input type="text" />
        <input type="text" />
      </div> */

      <>
        <input type="text" />
        <input type="text" />
      </>
      /* //  fragment标签只允许加key属性，其它属性加了会报错
      <Fragment key={1}>
        <input type="text" />
        <input type="text" />
      </Fragment> */
    )
  }
}
