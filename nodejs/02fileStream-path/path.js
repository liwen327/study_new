/*
 * @Author: liwz
 * @Date: 2024-08-21 13:46:15
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-21 13:52:44
 * @FilePath: /reactJs/Users/liwenzhi/study/node/path/path.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const path = require('path')

console.log(__dirname + '/index.html') //   /Users/liwenzhi/study/node/path/index.html

console.log(path.resolve(__dirname, './index.html')) //     /Users/liwenzhi/study/node/path/index.html

// dirname

let str = '/Users/liwenzhi/study/node/path/index.html'

// basename
console.log('basename: ', path.basename(str)) //index.html

// dirname
console.log('dirname: ', path.dirname(str)) // /Users/liwenzhi/study/node/path     文件所在的文件夹目录

// extname
console.log('extname: ', path.extname(str)) // .html
