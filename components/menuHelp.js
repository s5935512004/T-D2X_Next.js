import Grid from '@material-ui/core/Grid'
import Link from 'next/link'

const menuHelp = () => (
  <div align="right">
    <Grid container style={{ marginRight: "3px", marginTop: '30px' }}>
      <Grid item xs={0} sm={3} style={{ backgroundColor: "" }}></Grid>
      <Grid item xs={12} sm={9} style={{ backgroundColor: "#f5f9fa", paddingRight: "10px", paddingLeft: "10px" }}>
        <h2>คำถามที่นิยม</h2>
        <Link href="/popular1">
            <p>มีอาการถ่ายเป็นน้ำอย่างรุ่นแรง</p>
        </Link>
        <Link href="/popular2">
            <p>มีอาการถ่ายเป็นถ่ายเป็นมูกเลือดอย่างรุ่นแรง</p>
        </Link>
        <style jsx>{`
          p {
            cursor: pointer;
            color: #2da9eb;
            fontSize: '17px';
          }
          p:hover {
            color: #3f51b5;
            cursor: pointer;
          }
        `}</style>
      </Grid>
    </Grid>

  </div >
)

export default menuHelp