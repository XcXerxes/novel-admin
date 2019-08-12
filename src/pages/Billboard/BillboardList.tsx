import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import MaterialTable from 'material-table'
import { createStyles, withStyles, Theme } from '@material-ui/core/styles'
import ConfirmDialog from '../../components/ConfirmDialog'

function createData (title: string, caption: string, type: string, visits: number, createdTime: string) {
  return { title, caption, type, visits, createdTime}
}

const rows = [
  createData('游戏', '游戏广告', '首页广告', 20, '2019-12-24'),
  createData('游戏', '游戏广告', '首页广告', 20, '2019-12-24'),
  createData('游戏', '游戏广告', '首页广告', 20, '2019-12-24'),
  createData('游戏', '游戏广告', '首页广告', 20, '2019-12-24'),
  createData('游戏', '游戏广告', '首页广告', 20, '2019-12-24')
]

const columns:any = [
  { title: '名称', field: 'title', sorting: false },
  { title: '描述', field: 'caption', sorting: false },
  { title: '类型', field: 'type', sorting: false },
  { title: '点击人数', field: 'visits', sorting: false },
  { title: '创建时间', field: 'createdTime', sorting: false }
]

const styles = (theme: Theme) => createStyles({
  header: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  headerButton: {
    marginBottom: 10
  },
  paperRoot: {
    width: '100%',
    marginTop: 15
  }
})

interface BillboardProps {
  classes: Record<string, string>;
}
interface BillboardState {
   visible: boolean;
}
class BillboardList extends PureComponent<BillboardProps, BillboardState> {
  state = {
    visible: false
  }
  _editHandle = (rowData: any) => {

  }
  _deleteHandle = (rowData: any) => {
    this.setState({
      visible: true
    })
  }
  /**
   * 取消删除
   */
  handleOnCancel = () => {
    this.setState({
      visible: false
    })
  }
  /**
   * 确认删除
   */
  handleOnConfirm = () => {

  }
  /**
   * 新增广告
   */
  addBillboard = () => {

  }
  render ():React.ReactNode {
    const { classes } = this.props
    const { visible } = this.state
    return (
      <Grow in>
        <Grid container>
          <Grid container spacing={3} className={classes.header}>
            <Grid item>
              <TextField
                id="standard-password-input"
                label="广告类型"
                autoComplete="current-password"
                margin="normal"
              />
            </Grid>
            <Grid item lg={1}>
              <Button className={classes.headerButton} variant="contained" fullWidth color="primary">搜索</Button>
            </Grid>
            <Grid item lg={1}>
              <Button className={classes.headerButton} variant="contained" fullWidth color="primary" onClick={this.addBillboard}>新增广告</Button>
            </Grid>
          </Grid>
          <Paper className={classes.paperRoot}>
            <MaterialTable
              columns={columns}
              data={rows}
              localization={{
                header: {
                  actions: '操作'
                },
                pagination: {
                  labelRowsSelect: '条/页',
                  firstTooltip: '第一页',
                  previousTooltip: '上一页',
                  nextTooltip: '下一页',
                  lastTooltip: '最后一页'
                }
              }}
              actions={[
                {
                  icon: 'save',
                  tooltip: '编辑',
                  iconProps: {
                    color: 'primary'
                  },
                  onClick: (event, rowData) => this._editHandle(rowData)
                },
                rowData => ({
                  icon: 'delete',
                  iconProps: {
                    color: 'error'
                  },
                  tooltip: '删除',
                  onClick: (event, rowData) => this._deleteHandle(rowData),
                })
              ]}
              options={{
                actionsColumnIndex: -1,
                search: false,
                showTitle: false
              }}
            />
          </Paper>
          <ConfirmDialog
            open={visible}
            onCancel={this.handleOnCancel}
            text="确认要删除吗?"
            onConfirm={this.handleOnConfirm}
          />
        </Grid>
      </Grow>
    )
  }
}
export default withStyles(styles)(BillboardList)
