import React, { PureComponent } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import SentimentSatisfiedAlt from '@material-ui/icons/SentimentSatisfiedAlt'
import Typography from '@material-ui/core/Typography'
import { withStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles';


const styles = (theme: Theme) => createStyles({
  root: {
    height: '100vh'
  },
  img: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
})

export interface LoginState {
  username: string,
  password: string
}
export interface LoginProps {
  classes: any
}

class Login extends PureComponent<LoginProps, LoginState> {
  state = {
    username: '',
    password: ''
  }
  render (): React.ReactNode {
    debugger
    const { classes } = this.props
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.img} ></Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <SentimentSatisfiedAlt />
            </Avatar>
            <Typography component="h1" variant="h5" >
              小说后台系统
            </Typography>
            <form className={classes.form} noValidate >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="用户名"
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="密码"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
              >
                登录
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Login)
