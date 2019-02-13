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
import Card from '@material-ui/core/Card'
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
    constructor() {
        super()
        this.state = {
            ans: "",
            text: "",
            data: {

            },
            port: "http://157.230.43.83:3001/q",
            isLoading: true,
            main: true
        }
    }
    componentDidMount = () => {
        this.setState({ main: true })
    }

    get = () => {
        axios.get(''+this.state.port).then(res => {
            console.log(res.data.title)
            this.setState({ data: res.data }, () => console.log(this.state.data))
        })
            .finally(() => {
                this.setState({ isLoading: false, main: false })
            })
    }
    reset = () => {
        this.setState({ main: true })
    }
    send1 = (evt) => {
        this.setState({ isLoading: true })
        evt.preventDefault()
        if (this.state.data.order.substring(0, 1) === 'S') {
            axios.post(''+this.state.port, {
                order: this.state.data.symptom.S1.nextOrder
            }).then((res) => {
                console.log(res)
                this.setState({ data: res.data }, () => console.log(this.state.data))
            }).catch(error => {
                console.log(error.message);
            }).finally(() => {
                this.setState({ isLoading: false, main: false })
            })
        } else {
            axios.post(''+this.state.port, {
                order: this.state.data.symptom.U1.nextOrder
            }).then((res) => {
                console.log(res)
                this.setState({ data: res.data }, () => console.log(this.state.data))
            }).catch(error => {
                console.log(error.message);
            }).finally(() => {
                this.setState({ isLoading: false, main: false })
            })
        }

    }
    send2 = (evt) => {
        this.setState({ isLoading: true })
        evt.preventDefault()
        axios.post('http://157.230.43.83:3001/q', {
            order: this.state.data.symptom.U2.nextOrder
        }).then((res) => {
            console.log(res)
            this.setState({ data: res.data }, () => console.log(this.state.data))
        }).catch(error => {
            console.log(error.message);
        }).finally(() => {
            this.setState({ isLoading: false, main: false })
        })
    }

    render() {
        const QandAE = () => (
            < div >
                <Paper>
                    <Grid container spacing={12} style={boxstyle}>
                        <Grid item xs={2} sm={2} align='center'>
                            <Avatar style={tstyles} >T</Avatar>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Paper style={mtstyle}>{this.state.data.title}</Paper>
                        </Grid>
                        <Grid item xs={2} sm={2}></Grid>
                    </Grid>
                    <Grid container spacing={12} >
                        <Grid item xs={2} sm={2}></Grid>
                        <Grid item xs={8} sm={8} style={boxMessage}>
                            <Paper style={mastyle} onClick={this.send1} >{this.state.data.symptom.U1.title}</Paper>
                            <Paper style={mastyle} onClick={this.send2} >{this.state.data.symptom.U2.title}</Paper>
                        </Grid>
                        <Grid item xs={2} sm={2} align='center'>
                            <Avatar style={ustyles}>U</Avatar>
                        </Grid>
                    </Grid>
                </Paper>
            </div >
        )
        const Recommend = () => (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Card style={cardstyle}>
                            <h2 align='center'>{this.state.data.title}</h2>
                            <p onClick={this.send1}>{this.state.data.symptom.S1.title}</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2} ></Grid>
                </Grid>
            </div>
        )
        const cardstyle = {
            marginTop: '30px',
           
            paddingLeft: '10px',
            paddingRight: '10px',
        }
        const Develop =()=> (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={2} md={2} lg={2}></Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
                        <Card style={cardstyle}>
                            <h2 align='center'>{this.state.data.title}</h2>
                            <p onClick={this.reset}>Coming Soon</p>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2} lg={2} ></Grid>
                </Grid>
            </div>
        )
        const Progress = () =>(
                <div style={cardstyle}>
                    <CircularProgress color="primary"></CircularProgress>
                </div>
        )

        const { isLoading, data, main } = this.state

        return (
            <center>
                {isLoading === true && main === false && (
                    <tr>
                        <td colSpan="5">
                            <center>
                            {Progress()}
                            </center>
                        </td>
                    </tr>
                )}
                {main === true && (
                    this.get()

                )}
                {isLoading === false && main === false && data.title === 'กำลังพัฒนา' && (
                    <center>
                        {/* <h1>{this.state.data.title}</h1>
                        <button onClick={this.reset}>HOME</button> */}
                        {Develop()}
                    </center>
                )}
                {isLoading === false && main === false && data.type === 'summit' && (
                    <center>
                        {/* <h1>{this.state.data.title}</h1>
                        <button onClick={this.send1}>{this.state.data.symptom.S1.title}</button>
                        <p>order : {this.state.data.order}</p>
                        <button onClick={this.reset}>HOME</button> */}
                        {Recommend()}
                    </center>
                )}
                {/* {isLoading === false && main === false   && data.type ==='developing'  &&(
                              <center>
                <h1>{this.state.data.title}</h1>
                <button onClick={this.reset}>HOME</button>
              </center>
                          )} */}
                {isLoading === false && data.symptom.count === 2 && main === false && (
                    <center>
                        {/* <h1>{this.state.data.title}</h1>
                        <button onClick={this.send1}>{this.state.data.symptom.U1.title}</button>
                        <button onClick={this.send2}>{this.state.data.symptom.U2.title}</button>
                        <p>order : {this.state.data.order}</p>
                        <button onClick={this.reset}>HOME</button> */}
                        {QandAE()}
                    </center>
                )}

            </center>

        );
    }
}

export default App;

const boxstyle = {
    margin: '30px 0px',
}

const tstyles = {
    align: 'center',
    //marginLeft: '15px',
    marginTop: '28px',
    //marginBottom: '40px',
}
const ustyles = {
    //marginRight: '15px',
    //float: 'Right',
    //marginBottom: '15px',
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
