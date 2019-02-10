import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import QandA from '../components/QandA'
import MenuHelp from '../components/menuHelp'

const About = () => (
  <div>
    <Layout>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={2} md={3} lg={3} >
          <MenuHelp/>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={6} >
          <QandA/>
      </Grid>
        <Grid item xs={12} sm={2} md={3} lg={3} >
          
      </Grid>
      </Grid>
    </Layout>
  </div>


)

export default About