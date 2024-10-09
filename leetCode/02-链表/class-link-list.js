/*
 * @Author: liwz
 * @Date: 2024-10-09 09:34:29
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-09 18:19:15
 * @FilePath: /study_new/leetCode/02-链表/class-link-list.js
 * @Description:
 *
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved.
 */
/*
ListNode

LinkList

head   头节点

size   大小

今天主要学习：如何将一个数组转换成一个链表

1、数组转换成链表
2、push
3、remove
4、replace
5、indexOf
6、getNode()找到一个节点方法
7、从中间增加  addNode()

*/

// 定义节点类
class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// 定义链表类
class LinkList {
  constructor(arr) {
    if (arr === undefined) {
      this.head = null
      this.size = 0
    } else if (Array.isArray(arr)) {
      this.head = null
      this.size = arr.length
      this.generateList(arr)
    }
  }

  generateList(arr) {
    //1、 首先，初始化一个新节点
    let cur = new ListNode(arr[0])
    // 2、把这个新节点给到头部节点
    this.head = cur
    for (let i = 1; i < arr.length; i++) {
      // 3、下次循环进来时，把下一个节点给到当前节点
      cur.next = new ListNode(arr[i])
      // 4、node的指针指到下一个节点
      cur = cur.next
    }
  }
  push(val) {
    // 1、找到最后一个节点
    // 2、创建一个新节点
    // 3、让最后一个节点的指针指向新节点
    let lastNode = this.getNode(this.size - 1)
    let node = new ListNode(val)
    lastNode.next = node
    this.size++
  }
  // 增删改查的查
  getNode(index) {
    // 1、找到头节点
    // 2、依次类推，找到第index个节点
    // 处理边界问题，必须大于0，且小于等于数组长度size
    if (index < 0 || index >= this.size) {
      console.log('查找位置不在链表长度范围内！')
      return
    }

    let cur = this.head
    for (let i = 0; i < index; i++) {
      cur = cur.next
    }
    return cur
  }

  // 删除节点
  remove(index) {
    // 1、找到要删除元素前面的一个节点
    // 2、把要删除元素的指针给到后面一个节点
    if (index < 0 || index >= this.size) {
      console.log('要删除的位置超过链表长度范围')
      return
    }
    let node = this.getNode(index - 1)
    node.next = this.getNode(index).next
    this.size--
  }

  // 增加节点，边界问题和上面不同

  replace(index, val) {
    //
  }
}

// 1 => 2 => 3 => 4
let arr = [1, 2, 3, 4]
let l1 = new LinkList(arr)
// console.log(l1.getNode(5))
// l1.push(6)
l1.remove(4)
console.dir(l1, {
  depth: 10
})
