import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import { MenuItemProps } from './MenuItem'

import MenuItem from './MenuItem'
import menus from './Menus.config'

const drawerWidth = 240
const styles = (theme: Theme) => createStyles({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    }
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  }
})

interface MenusProps {
  classes: Record<string, string>;
  open: boolean;
  drawerClose: (value:boolean) => void;
}

const Menus:React.FC<MenusProps> = (props) => {
  const { classes } = props
  /**
   * 关闭导航菜单
   */
  const handleDrawerClose = ():void => {
    props.drawerClose(false)
  }
  /**
   * 渲染导航菜单
   */
  function renderNavItems ({ menus }:any): React.ReactNode {
    return (
      <List>
        { menus.reduce((items:any, page:any) => reduceChildRoute({items, page}), [])}
      </List>
    )
  }
  /**
   * 
   */
  function reduceChildRoute ({items, page }: any): React.ReactNode {
    if (page.children && page.children.length > 1) {
      items.push(
        <MenuItem
          key={page.key}
          title={page.title}
          icon={page.icon}
          depth={0}
        >
          {renderNavItems({ menus: page.children})}
        </MenuItem>
      )
    } else {
      page = page.children && page.children.length === 1 ? page.children[0] : page
      items.push(
        <MenuItem
          key={page.key}
          title={page.title}
          icon={page.icon}
          path={page.path}
          depth={0}
        />
      )
    }
    return items
  }
  const { open } = props
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: `${classes.drawerPaper} ${!open && classes.drawerPaperClose}`,
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {renderNavItems({ menus })}
    </Drawer>
  )
}
export default withStyles(styles)(Menus)
