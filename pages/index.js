import Layout from '../components/Layout'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import color from '@material-ui/core/colors/lime';
import Home from './home'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'

const Index = () => (
    
  <div >
    <Layout>
    <Home/>
    </Layout>
  </div>
)

export default Index

