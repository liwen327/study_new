/*
 * @Author: liwz
 * @Date: 2024-08-22 10:05:14
 * @LastEditors: liwz
 * @LastEditTime: 2024-09-10 16:25:29
 * @FilePath: /study_new/react-staging/src/App.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react'
import axios from 'axios'
import { Link, Route, Routes, NavLink, Switch, Redirect } from 'react-router-dom'

// import Count from './components/Count'
// import Count from './components/1_setState'
// import Count from './components/2_useState'
// import Count from './components/3_useEffect'
// import Count from './components/4_Fragment'
import Demo from './components/6_PureComponent'

export default class App extends Component {
  render() {
    return (
      <div>
        <Demo></Demo>
      </div>
    )
  }
}
