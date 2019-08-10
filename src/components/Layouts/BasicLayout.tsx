import React, { PureComponent } from 'react'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import Header from './Header'
import Menus from '../Menus/Menus'

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
    return (
      <div className={classes.root}>
        <Header open={open} drawerOpen={this._headerDrawerOpen} />
        <Menus open={open} drawerClose={this._menuDrawerClose} />
        <main className={classes.content}>

        </main>
      </div>
    )
  }
}

export default withStyles(styles)(BasicLayout)
