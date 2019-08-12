import React from 'react'
import Grow from '@material-ui/core/Grow'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  paperWrapper: {
    width: '100%',
    padding: '20px'
  },
  actions: {
    marginTop: '15px',
    marginBottom: '15px'
  }
})

export interface BillboardCreateProps {
  classes: Record<string, string>;
}

const BillboardCreate: React.FC<BillboardCreateProps> = (props) => {
  const { classes } = props
  return (
    <Grow in>
      <Grid container sm={8}>
        <Paper className={classes.paperWrapper}>
          <form>
            <Grid item sm={7}>
              <TextField
                id="outlined-name"
                label="标题"
                margin="normal"
                required
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item sm={7}>
              <TextField
                id="outlined-uncontrolled"
                label="描述"
                required
                fullWidth
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={7}>
              <TextField
                id="outlined-name"
                label="图片链接"
                className={classes.textField}
                margin="normal"
                required
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item sm={7}>
              <TextField
                id="outlined-uncontrolled"
                label="描述"
                required
                fullWidth
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid container item sm={7} spacing={1} className={classes.actions}>
              <Grid item sm={6}>
                <Button variant="contained" fullWidth>重置</Button>
              </Grid>
              <Grid item sm={6}>
                <Button variant="contained" fullWidth color="primary">提交</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grow>
  )
}

export default withStyles(styles)(BillboardCreate)
