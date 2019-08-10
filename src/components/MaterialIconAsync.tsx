import React from 'react'
import Loadable from  '@loadable/component'

export interface MaterialIconAsyncProps {
  icon: string;
}
const MaterialIconAsync = Loadable((props: MaterialIconAsyncProps) => import(`@material-ui/icons/${props.icon}`))

export default MaterialIconAsync
