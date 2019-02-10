import Link from 'next/link'
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import Fab from '@material-ui/core/Fab'

const style = {
  fontSize: '16px',
  color: '#ffffff',
}
const login = {
  marginTop: 6,
  marginRight: 15,
  marginBottom: 6,
  paddingLeft: 30,
  paddingRight: 30,
  color: '#ffffff',
}
const topbar = {
  backgroundColor: 'black',
  position: 'absolute',
  right: 0,
  top: 0,
  left: 0,
  paddingTop: '10px',
  paddingBottom: '10px',
  color: 'blue',
}
const shop = {
  marginRight: '20px',
}

const Header = () => (
  <div>
    <style jsx>{`
          S {
            cursor: pointer;
            color: #2da9eb;
            fontSize: '17px';
          }
          S:hover {
            color: #58c5ff;
            cursor: pointer;
          }
    `}</style>
    <div class="topbar" align="right" style={topbar}>
      <Grid container spacing={8} >
        <Grid item xs={10} sm={10} align="center">Logo</Grid>
        <Grid item xs={2} sm={2} align="right" >
          <Link href="/shop">
            <Fab variant="extended" color="primary" size="small"style={shop} >Shop</Fab>
          </Link>
        </Grid>
      </Grid>
    </div>
    <Grid container>
      <Grid item xs={12} sm={10} md={10} lg={10} >
        <Tabs style={{ backgroundColor: '#33479e', paddingTop: '50px'}}>
          <Link href="/">
            <Tab label="หน้าหลัก" style={style} id="S"></Tab>
          </Link>
          <Link href="/help">
            <Tab label="ถามหมอ" style={style}></Tab>
          </Link>
        </Tabs>
      </Grid>

      <Grid item xs={12} sm={2} md={2} lg={2} >
        <Tabs style={{ backgroundColor: '#33479e', paddingTop: '50px' }}>
          <Button variant="outlined" style={login}>ลองชื่อเข้าใช้</Button>
          <Button variant="outlined" style={login}>สมัครสมาชิก</Button>
        </Tabs>
      </Grid>
    </Grid>
  </div>
)
export default Header