import React, { PureComponent } from 'react'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Header from './Header'
import Menus from '../Menus/Menus'
import { Route, Switch } from 'react-router-dom'
import { getRouterData } from '../../common/routes'
import Container from '@material-ui/core/Container'

export interface BasicProps {
  classes: Record<string, string>;
}

export interface BasicState {
  open: boolean;
}

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3)
  }
})

class BasicLayout extends PureComponent<BasicProps, BasicState> {
  state = {
    open: true
  }
  _headerDrawerOpen = (open: boolean) => {
    this.setState({
      open
    })
  }
  _menuDrawerClose = (open: boolean) => {
    this.setState({
      open
    })
  }
  render (): React.ReactNode {
    const { classes } = this.props
    const { open } = this.state
    const routes = getRouterData()
    debugger
    return (
      <div className={classes.root}>
        <Header open={open} drawerOpen={this._headerDrawerOpen} />
        <Menus open={open} drawerClose={this._menuDrawerClose} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <div className={classes.container}>
            <Switch>
              {routes.map((item: any) => (
                <Route
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              ))}
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(BasicLayout)
