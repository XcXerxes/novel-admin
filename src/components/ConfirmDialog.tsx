import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Grid from '@material-ui/core/Grid'

export interface ConfirmDialogProps {
  onClose?: () => void;
  open: boolean;
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog:React.FC<ConfirmDialogProps> = (props) => {
  const { onClose, open, text, onConfirm, onCancel, ...newProps } = props
  return (
    <Dialog disableBackdropClick fullWidth disableEscapeKeyDown maxWidth="xs" open={open} {...newProps}>
      <DialogTitle>提示</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" fullWidth onClick={onCancel}>取消</Button>
        <Button variant="contained" fullWidth color="primary" onClick={onConfirm}>确认</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
