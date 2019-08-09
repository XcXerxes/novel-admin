import React, { PureComponent, Fragment } from 'react'
import Header from './Header'

export interface BasicProps {

}

export interface BasicState {

}

class BasicLayout extends PureComponent<BasicProps, BasicState> {
  render (): React.ReactNode {
    return (
      <Fragment>
        <Header />
      </Fragment>
    )
  }
}

export default BasicLayout
