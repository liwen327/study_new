/*
 * @Author: liwz
 * @Date: 2024-10-09 09:34:29
 * @LastEditors: liwz
 * @LastEditTime: 2024-10-10 17:33:45
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
    if (index === 0) {
      let node = this.getNode(0)
      node.next = this.getNode(1)
    } else {
      let node = this.getNode(index - 1)
      node.next = this.getNode(index).next
    }
    this.size--
  }

  // 增加节点，边界问题和上面不同
  addNode(index, val) {
    // 1、创建一个新节点
    // 2、找到第index节点前面的一个节点
    // 3、把前面一个节点的next指向新节点
    // 4、把新节点的指针指向第index个节点
    if (index < 0 || index > this.size) {
      console.log('增加位置链表长度范围')
      return
    }
    if (index === 0) {
      let newNode = new ListNode(val) //创建一个新节点
      let head = this.head
      this.head = newNode //要增加的节点就是第一个节点
      newNode.next = head //新节点的next就指向之前的头节点
    } else {
      let newNode = new ListNode(val)
      let preNode = this.getNode(index - 1)
      // preNode.next = newNode
      // newNode.next = this.getNode(index)
      // 还可以写成下面这样
      newNode.next = preNode.next // 新节点的指针指向第index个节点
      preNode.next = newNode // index前一个节点的指针指向新节点
    }

    this.size++
  }

  replace(index, val) {
    //1、找到第index个节点
    // 2、并替换成val
    if (index < 0 || index >= this.size) {
      console.log('要替换的位置超过链表长度范围')
      return
    }
    let cur = this.getNode(index)
    cur.val = val
  }
  indexOf(val) {
    // 1、遍历链表，并与val比较链表的值，如果相等则return此值的下标
    let cur = this.head
    for (let i = 0; i < this.size; i++) {
      if (cur.val === val) {
        return i
      }
      cur = cur.next
    }
  }
}

// 1 => 2 => 3 => 4
let arr = [1, 2, 3, 4]
let l1 = new LinkList(arr)
// console.log(l1.getNode(5))
// l1.push(6)
// l1.remove(0)

// l1.addNode(2, 7)
// l1.replace(2, 7)
console.log('1111: ', l1.indexOf(1))
console.dir(l1, {
  depth: 10
})
