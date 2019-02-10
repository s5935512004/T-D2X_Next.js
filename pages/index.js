import Layout from '../components/Layout'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import color from '@material-ui/core/colors/lime';
import Home from './home'

const Index = () => (
  <Layout>
    <Home/>
  </Layout>
)

export default Index