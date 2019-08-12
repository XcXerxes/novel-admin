import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  actions: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
})

export interface ConfirmDialogProps {
  classes: Record<string, string>;
  onClose?: () => void;
  open: boolean;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog:React.FC<ConfirmDialogProps> = (props) => {
  const { classes, onClose, open, text, onConfirm, onCancel, ...newProps } = props
  return (
    <Dialog disableBackdropClick fullWidth disableEscapeKeyDown maxWidth="xs" open={open} {...newProps}>
      <DialogTitle>提示</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button variant="contained" fullWidth onClick={onCancel}>取消</Button>
        <Button variant="contained" fullWidth color="primary" onClick={onConfirm}>确认</Button>
      </DialogActions>
    </Dialog>
  )
}

export default withStyles(styles)(ConfirmDialog)
