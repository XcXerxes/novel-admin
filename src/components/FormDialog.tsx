import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import { TransitionProps } from '@material-ui/core/transitions'
import Grow from '@material-ui/core/Grow'
import { Button } from '@material-ui/core'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = (theme: Theme) => createStyles({
  actions: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
})

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
})

export interface FormDialogProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  classes: Record<string, string>;
}

const FormDialog:React.FC<FormDialogProps> = (props) => {
  const { classes, open, title, onClose, children, onCancel, onConfirm } = props
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container lg={9}>
          {children}
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="contained" fullWidth onClick={onCancel}>取消</Button>
        <Button variant="contained" fullWidth color="primary" onClick={onConfirm}>确认</Button>
      </DialogActions>
    </Dialog>
  )
}

export default withStyles(styles)(FormDialog)
