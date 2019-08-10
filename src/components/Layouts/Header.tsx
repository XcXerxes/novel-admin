/**
 * 公共头部
 */
import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { withStyles, Theme } from '@material-ui/core/styles'
import ConfirmDialog from '../ConfirmDialog'

const drawerWidth = 240

const styles = (theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  toolBar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: 36
  },
  title: {
    flexGrow: 1
  }
})

interface HeaderProps {
  classes: any;
  open: boolean;
  drawerOpen: (value: boolean) => void;
}

const Header:React.FC<HeaderProps> = (props) => {
  const { classes } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  const isMenuOpen = Boolean(anchorEl)
  /**
   * 导航切换
   */
  const handleDrawerOpen = ():void => {
    props.drawerOpen(true)
  }
  const handleMenuClose = ():void => {
    setAnchorEl(null)
    setVisible(true)
  }
  /**
   * 个人中心打开
   */
  function handleProfileMenuOpen (event: React.MouseEvent<HTMLElement>):void {
    setAnchorEl(event.currentTarget)
  }
  /**
   * 移动端 打开菜单
   */
  const handleMobileMenuOpen = ():void => {

  }
  /**
   * 退出提示对话框
   */
  const handleOnConfirm = ():void => {
    alert('退出..')
    setVisible(false)
  }
  const handleOnCancel = ():void => {
    setVisible(false)
  }
  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>个人中心</MenuItem>
      <MenuItem onClick={handleMenuClose}>退出</MenuItem>
    </Menu>
  )
  const { open } = props
  return (
    <AppBar position="absolute" className={`${classes.appBar} ${open && classes.appBarShift}`} >
      <Toolbar className={classes.toolBar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} >
          
        </Typography>
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          </div>
      </Toolbar>
      {renderMenu}
      <ConfirmDialog
        open={visible}
        onCancel={handleOnCancel}
        text="确认要退出吗?"
        onConfirm={handleOnConfirm}
      />
    </AppBar>
  )
}
export default withStyles(styles)(Header)
