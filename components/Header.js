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

const Header = () => (
  <div>
    <Grid container spacing={16} >
      <Grid  item xs={12} sm={12} style={{backgroundColor: '#1F1F1F', position: 'relative' }} align='center' >
        <Link href="/">
          <img src="https://github.com/s5935512004/T-D2X_Next.js/blob/master/Pictures/Logo.png?raw=true" width="40" height="40"></img>
        </Link>
        <Link href="/shop">
          <Button style={{color:'white',position:'absolute',right:0,marginTop:'5px',marginRight:'10px'}}color="primary" variant="contained">Shop</Button>
        </Link>
      </Grid>
        <Grid container spacing={0} >
        <Grid item xs={12} sm={12} style={{ /*opacity: 0.4, */ position: 'relative'}} >
          <ul>
            <Link href="/">
              <li><a>หน้าหลัก</a></li>
            </Link>
            <Link href="/help">
              <li><a>ถามหมอ</a></li>
            </Link>
          </ul>
        </Grid>
        <Fab variant="extended" size="small" color="default"
          style={{position:'absolute',
                  right:0,
                  marginTop:'5px',
                  marginRight:'10px' ,
                  paddingRight:'15px',
                  paddingLeft:'15px',
                  color: '#fff',
                  backgroundColor: '#3f51b5',
                  }}>ลงชื่อเข้าใช้

          </Fab>
          <Fab variant="extended" size="small" color="default"
          style={{position:'absolute',
                  float:'Right',
                  right:0,
                  marginTop:'5px',
                  marginRight:'115px' ,
                  paddingRight:'15px',
                  paddingLeft:'15px',
                  color: '#fff',
                  backgroundColor: '#3f51b5',
                  }}>เข้าสู่ระบบ
          </Fab>
      </Grid>

      <style jsx>{`
      
      img{
        cursor: pointer;
      }

      //Navigation 
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #000000;
        opacity: 0.7;
      }
      li {
        cursor: pointer;
        float: left;
        //opacity: '0'
      } 
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      li:hover {
            color: #58c5ff;
            cursor: pointer;
            opacity: '1'
          }
      li a:hover {
        color: #1e88e5;
        opacity: 1;
      }

      @media (max-width: 600px) {}
    `}</style>
    </Grid>
  </div>
)
export default Header