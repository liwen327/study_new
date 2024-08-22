/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-29 06:12:03
 * @LastEditors: liwz
 * @LastEditTime: 2024-08-20 17:08:52
 * @FilePath: /reactJs/Users/liwenzhi/study/node/fs/appendFile.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')

fs.appendFile('file.txt', '\r\n这部分是追加的内容！', err => {
  if (err) {
    console.log('追加失败！')
    return
  }
  console.log('追加成功！')
})
