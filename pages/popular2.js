import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import MenuHelp from '../components/menuHelp'

const popular2 = () => (
    <div>
        <Layout>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={2} md={3} lg={3} style={{marginRight: '30px'}}>
                    <MenuHelp/>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={6}>
                    <Card style={cardstyle}>
                        <h2 align='center'>มีอาการถ่ายเป็นถ่ายเป็นมูกเลือดอย่างรุ่นแรง</h2>
                        <p>คุณควรจะต้องตรวจอุจาระด้วยกล้องจุลทรรศน์และเพาะเชื้อ</p>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={2} md={3} lg={3} ></Grid>
            </Grid>
            
        </Layout>
    </div>
)

const cardstyle = {
    marginTop: '30px',
   
    paddingLeft: '30px',
    paddingRight: '30px',
}
export default popular2
