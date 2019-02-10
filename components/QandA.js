import React, { Component } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import axios from 'axios'
import { Button } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'

const boxstyle = {
    margin: '30px 0px',
}

const tstyles = {
    marginLeft: '15px',
    marginTop: '30px',
    marginBottom: '40px',
}
const ustyles = {
    marginRight: '15px',
    float: 'Right',
    marginBottom: '15px',
}

const qastyles = {
    margin: '10px 0px',
}

const mtstyle = {
    padding: '7px',
    cursor: 'pointer',
    textAlign: 'left',
    marginTop: '30px',
    fontSize: '18px',
}

const mastyle = {
    padding: '7px',
    cursor: 'pointer',
    textAlign: 'right',
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: '18px',
}
const boxMessage = {
    marginBottom: '30px',
}

class QandA extends Component {
    constructor() {
        super()
        this.state = {
            T: "สวัสดี คุณต้องการให้ช่วยไหมครับ",
            U1: "ต้องการความช่วยเหลือ",
            U2: "ต้องการหาโรงพยาบาลใกล้เคียง",
            code: 'T0U1',
            data: {},
            count: 1,
            tstate: 1,
            stathis: 1,
        }
        this.objHis = {
            a1: 'ต้องการความช่วยเหลือ',
            a2: '',
            a3: '',
            a4: '',
            a5: '',
        }
    }
    get = () => {
        axios.get('https://calm-plains-71371.herokuapp.com/api').then(res => {
            console.log(res.data)
            this.setState({
                T: res.data.type
            })
        })
    }
    post2 = (evt) => {
        axios.post('https://calm-plains-71371.herokuapp.com/api', {
            symptom: evt
        }).then((res) => {
            //console.log("res :"+res)
            this.setState({ data: res.data }, () => console.log(this.state.data))
            this.setState({ T: this.state.data.T })
            this.setState({ U1: this.state.data.U1 })
            this.setState({ U2: this.state.data.U2 })
        })
    }

    callByU1 = () => {
        if (this.state.count == 1 && this.state.tstate == 1) {
            this.state.count++ //count = 2
            this.state.tstate++
            this.get()
            this.setState({ U1: 'ใช่', U2: 'ไม่ใช่' })
        }
        else if (this.state.count == 2 && this.state.tstate == 2) { //ใช่ T0U1
            this.state.count++ //count = 3
            this.state.tstate++
            this.state.stathis++
            this.objHis.a2='มีอุจาระร่วงมากว่า 14 วัน'
            this.post2('T0U1')
            //this.setState({T: 'คุณมีอาการอย่างไรเด่น'})
            //this.setState({U1:'อาเจียน',U2:'อุจจาระร่วง'})
        }
        else if (this.state.count == 3 && this.state.tstate == 3) { //อาเจียน T1U1
            this.state.count++ //count = 4
            this.state.stathis++
            this.post2('T1U1')
            this.objHis.a3='อาเจียน'
            /*this.setState({T: 'เกิดจากอาหารเป็นพิษ หรือกระเพาะและลำไส้อักเสบจากไวรัส'})
            setTimeout(() => {
                this.setState({T: 'ต้องรักษาตามอาการ ป้องกันและรักษาภาวะขาดน้ำและเกลือแร่ด้วย ORT/ORS/IVF'})
                }, 2000)
            this.setState({U1:'กลับไปหน้าหลัก',U2:'สักซื้อเกลือแร่'})*/
        }
        else if (this.state.count == 4 && this.state.tstate == 4) { //ถ่ายเป็นน้ำ T2U1
            this.state.count++ //count = 5
            this.state.tstate++
            this.state.stathis++
            this.objHis.a4='ถ่ายเป็นน้ำ'
            this.post2('T2U1')
            //this.setState({T: 'คุณมีอาการรุนแรงไหม'})
            //this.setState({U1:'ปานกลางถึงรุ่นแรง',U2:'มีน้อยหรือไม่มีเลย'})
        }
        else if (this.state.count == 5 && this.state.tstate == 5) { //ปานกลางถึงรุ่นแรง T3U1
            this.state.count++ //count = 6
            this.state.tstate++
            this.state.stathis++
            this.objHis.a5='ปานกลางถึงรุ่นแรง'
            this.post2('T3U1')
            //this.setState({T: 'คุณจะต้องดื่มเกลือแร่ทดแทนน้ำที่ขาดด้วย ORS/IVF โดยเร็ว'})
            //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'สั่งซื้อเกลือแร่'})
        }

    }
    callByU2 = () => {
        if (this.state.count == 1 && this.state.tstate == 1) { //ต้องการหาโรงพยาบาลใกล้เคียง
            this.setState({ T: 'เปิด Google Map สิครับ' })
        }
        else if (this.state.count == 2 && this.state.tstate == 2) { //ไม่ใช่ T0U2
            this.state.count++
            this.post2('T0U2')
            //this.setState({T: 'คุณควรพักผ่อนเยอะๆ นะครับ'})
        }
        else if (this.state.count == 3 && this.state.tstate == 3) { //อุจจาระร่วง T1U2
            this.state.count++ //count = 4
            this.state.tstate++
            this.state.stathis++
            this.objHis.a3='มีอาการอุจจาระร่วงเด่น'
            this.post2('T1U2')
            //this.setState({T: 'คุณถ่ายเป็นอย่างไรบ้าง'})
            //this.setState({U1:'ถ่ายเป็นน้ำ',U2:'ถ่ายเป็นมูกเลือด'})
        }
        else if (this.state.count == 4 && this.state.tstate == 4) { //ถ่ายเป็นมูกเลือด T2U2
            this.state.count++ //count = 5
            this.state.stathis++
            this.objHis.a4='ถ่ายเป็นมูกเลือด'
            this.post2('T2U2')
            //this.setState({T: 'คุณจะต้องตรวจอึจจาระด้วยกล้องจุลทรรศน์และเพาะเชื้อ'})
            //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'กลับสู่หน้าหลัก'})
        }
        else if (this.state.count == 5 && this.state.tstate == 5) { //มีน้อยหรือไม่มีเลย T3U2
            this.state.count++ //count = 6
            this.state.stathis++
            this.objHis.a5='มีน้อยหรือไม่มีเลย'
            this.post2('T3U2')
            //this.setState({T: 'คุณจะต้องดื่มเกลือแร่ป้องกันการขาดน้ำด้วย ORT'})
            //this.setState({U1:'ต้องการหาโรงพยาบาลใกล้เคียง',U2:'สั่งซื้อเกลือแร่'})
        }
    }
    //History
    chipHistory = (text) => {
        return (
            <div><Chip color="primary" variant="outlined" label={text} style={{ marginTop: '15px', marginRight: '2px' }} /></div>
        );
    }

    hisQA = (x, t1, t2, t3, t4, t5) => {
        if (x == 1) {
            return (<div>
                <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '15px' }}>
                    {this.chipHistory(t1)}
                </Grid>
            </div>);
        }
        else if (x == 2) {
            return (<div>
                <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '15px' }}>
                    {this.chipHistory(t1)}{this.chipHistory(t2)}
                </Grid>
            </div>);
        }
        else if (x == 3) {
            return (<div>
                <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '15px' }}>
                    {this.chipHistory(t1)}{this.chipHistory(t2)}{this.chipHistory(t3)}
                </Grid>
            </div>);
        }
        else if (x == 4) {
            return (<div>
                <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '15px' }}>
                    {this.chipHistory(t1)}{this.chipHistory(t2)}{this.chipHistory(t3)}{this.chipHistory(t4)}
                </Grid>
            </div>);
        }
        else if (x == 5) {
            return (<div>
                <Grid container spacing={0} direction="row" justify="flex-start" alignItems="flex-start" style={{ marginTop: '15px' }}>
                    {this.chipHistory(t1)}{this.chipHistory(t2)}{this.chipHistory(t3)}{this.chipHistory(t4)}{this.chipHistory(t5)}
                </Grid>
            </div>);
        }
    }
    callHistoryCondition = () =>  {
        if(this.state.stathis==1){
            return this.hisQA(1, this.objHis.a1)
        }
        else if(this.state.stathis==2){
            return this.hisQA(2, this.objHis.a1,this.objHis.a2)
        }
        else if(this.state.stathis==3){
            return this.hisQA(3, this.objHis.a1,this.objHis.a2,this.objHis.a3)
        }
        else if(this.state.stathis==4){
            return this.hisQA(4, this.objHis.a1,this.objHis.a2,this.objHis.a3,this.objHis.a4)
        }
        else if(this.state.stathis==5){
            return this.hisQA(5, this.objHis.a1,this.objHis.a2,this.objHis.a3,this.objHis.a4,this.objHis.a5)
        }
    }


    render() {
        const QandAE = () => (

            < div >
                <Paper>
                    <Grid container spacing={12} style={boxstyle}>
                        <Grid item xs={2} sm={2} >
                            <Avatar style={tstyles}>T</Avatar>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Paper style={mtstyle}>{this.state.T}</Paper>
                        </Grid>
                        <Grid item xs={2} sm={2}></Grid>
                    </Grid>
                    <Grid container spacing={12} >
                        <Grid item xs={2} sm={2}></Grid>
                        <Grid item xs={8} sm={8} style={boxMessage}>
                            <Paper style={mastyle} onClick={this.callByU1} >{this.state.U1}</Paper>
                            <Paper style={mastyle} onClick={this.callByU2} >{this.state.U2}</Paper>
                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <Avatar style={ustyles}>U</Avatar>
                        </Grid>
                    </Grid>
                </Paper>
            </div >
        )
        const callHistory = () => (
            <div>{this.callHistoryCondition()}</div>
        )
        return (

            <div>
                {callHistory()}
                {QandAE()}
            </div>
        );
    }
}
export default QandA
