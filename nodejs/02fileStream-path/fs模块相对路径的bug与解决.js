/*
 * @Author: liwz
 * @Date: 2024-08-20 20:51:47
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-20 20:54:39
 * @FilePath: /reactJs/Users/liwenzhi/study/node/fs/fs模块相对路径的bug与解决.js
 * @Description:  使用__dirname   绝对路径：保存的是：运行文件的所在目录的绝对路径
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
const fs = require('fs')

// fs.writeFileSync('./index.html', 'love')

console.log('__dirname:', __dirname) // __dirname: /Users/liwenzhi/study/node/fs   这就是它的绝对路径，不会因为运行node时目录不同而使程序发生不可预期的错误

fs.writeFileSync(__dirname + '/index.html', 'love')
