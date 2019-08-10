/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 15:32:58
 * @LastEditTime: 2019-08-10 20:08:40
 * @LastEditors: Please set LastEditors
 */
/**
 * 导航菜单的配置
 */
import React, {useRef} from 'react'
import Dashboard from '@material-ui/icons/Dashboard'
import LibraryBooks from '@material-ui/icons/LibraryBooks'

const menusConfig:any = [
  {
    key: 1,
    path: '/',
    icon: Dashboard,
    title: '用户报表'
  },
  {
    key: 2,
    path: '/billboard',
    icon: LibraryBooks,
    title: '广告管理'
  }
]
export default menusConfig
