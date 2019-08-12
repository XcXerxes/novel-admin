import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import Collapse from '@material-ui/core/Collapse'
import { NavLink as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

import MaterialIconAsync from '../MaterialIconAsync'

const AdapterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>((props, ref) => (
  <RouterLink innerRef={ref as any} {...props} />
))


const styles = (theme: Theme) => createStyles({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    padding: 0
  },
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    textAlign: 'left'
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  itemIcon: {
    color: 'inherit' 
  },
  icon: {
    transition: theme.transitions.create(['all'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }
})

export interface MenuItemProps {
  classes: Record<string, string>;
  children?: React.ReactNode;
  path?: string;
  title: string;
  onClick?: () => void;
  depth: number;
  linkProps?: any;
  icon: React.FC;
  openImmediately?: boolean;
}
const MenuItem = (props: MenuItemProps) => {
  const {
    classes,
    children,
    path,
    title,
    icon,
    depth,
    onClick,
    linkProps,
    openImmediately=false,
    ...newPorps
  } = props
  const [open, setOpen] = React.useState(openImmediately)
  const style: any = {
    paddingLeft: 8 * (3 + 2 * depth)
  }
  /**
   * 点击按钮
   */
  function handleClick () {
    setOpen(oldOpen => !oldOpen)
  }
  if (path) {
    return (
      <ListItem className={classes.itemLeaf} {...newPorps}
      >
        <Button
          component={AdapterLink}
          activeClassName={classes.active}
          to={path}
          className={classes.buttonLeaf}
          onClick={onClick}
          style={style}
          {...linkProps}
        >
          <ListItemIcon className={classes.itemIcon}>
            {React.createElement(icon)}
          </ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </Button>
      </ListItem>
    )
  }
  return (
    <ListItem className={classes.item}
      {...newPorps}
    >
      <Button className={classes.button} onClick={handleClick}>
        <ListItemIcon className={classes.itemIcon}>
          {React.createElement(icon)}
        </ListItemIcon>
        <ListItemText>{title}</ListItemText>
        {open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </ListItem>
  )
}

export default withStyles(styles)(MenuItem)
