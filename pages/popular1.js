import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import MenuHelp from '../components/menuHelp'

const popular1 = () => (
    <div>
        <Layout>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={2} md={3} lg={3} style={{marginRight: '30px'}}>
                    <MenuHelp/>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={6}>
                    <Card style={cardstyle}>
                        <h2 align='center'>มีอาการถ่ายเป็นน้ำอย่างรุ่นแรง</h2>
                        <p>คุณควรทดแทนหรือประคองไม่ใช้ขาดน้ำและเกลือแร่ที่ขาดด้วย ORS(Oral Rehydration Salts)/IVF อย่างรวดเร็ว จากนั้นควรไปตรวจอุจาระ 
                            ถ้าผลตรวจพบเชื้ออหิวาต์ ก็จะต้องทาน Tetracycline 2g ต่อวัน นาน 3 วัน</p>
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
export default popular1
