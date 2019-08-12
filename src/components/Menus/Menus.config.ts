/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 15:32:58
 * @LastEditTime: 2019-08-13 00:54:27
 * @LastEditors: Please set LastEditors
 */
/**
 * 导航菜单的配置
 */
import React, {useRef} from 'react'
import Dashboard from '@material-ui/icons/Dashboard'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import AddBox from '@material-ui/icons/AddBox'
import Book from '@material-ui/icons/Book'

const menusConfig:any = [
  {
    key: 1,
    path: '/dashboard',
    icon: Dashboard,
    title: '用户报表'
  },
  {
    key: 2,
    path: '/billboard',
    icon: LibraryBooks,
    title: '广告管理',
    children: [
      {
        key: 3,
        path: '/billboard/billboard-list',
        icon: Book,
        title: '广告列表'
      },
      {
        key: 4,
        path: '/billboard/billboard-create',
        icon: AddBox,
        title: '发布广告'
      },
    ]
  }
]
export default menusConfig
