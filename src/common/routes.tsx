import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Loadable, { DefaultImportedComponent } from '@loadable/component'
import menus from '../components/Menus/Menus.config'

const dynamicComponent = (component: (props: any) => Promise<DefaultImportedComponent<any>>) => {
  return Loadable(component, {
    fallback: <CircularProgress />
  })
}

interface RouterConfigProps {

}
export const getRouterData = () => {
  const routerConfig: any = {
    '/dashboard': {
      component: dynamicComponent(() => import('../pages/Dashboard/Dashboard'))
    },
    '/billboard/billboard-list': {
      component: dynamicComponent(() => import('../pages/Billboard/BillboardList'))
    },
    '/billboard/billboard-create': {
      component: dynamicComponent(() => import('../pages/Billboard/BillboardCreate'))
    }
  }
  let routerData:any = []
  Object.keys(routerConfig).forEach((path: string) => {
    let router = routerConfig[path]
    router = {
      ...router,
      path
    }
    routerData.push(router)
  })
  return routerData
}
