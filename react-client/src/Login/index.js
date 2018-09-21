import React, {Component} from 'react';
import {Segment, Grid, Header, Form, Button, Icon, Message} from 'semantic-ui-react'
import Axios from 'axios';
import {Redirect, Link} from 'react-router-dom';

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:'', 
            toDashboard: false,
            warning:false        
        }
        this.handleClick = this.handleClick.bind(this);


    }

    componentDidMount() {
        
    }


    async handleClick ()  {
        console.log(this.state);
        try{
            var obj = {
                email: this.state.email,
                password: this.state.password
            }
            const response = await Axios.post(`http://localhost:3001/login`, obj);
            sessionStorage.setItem("jwt", response.data.token);
            this.setState({toDashboard:true, warning:false});
            //console.log(sessionStorage.getItem("jwt"));
        }
        catch(error){
            console.log(error);
            this.setState({warning:true});
        }

    }



    render() {
        if (this.state.toDashboard) {
            return <Redirect push to={{pathname: "/dashboard", state: { email: this.state.email }}}/>;
        }

        return (
            <div className='login-form' style={{backgroundColor:'#222222'}}>

                {/*
                        Heads up! The styles below are necessary for the correct render of this example.
                        You can do same with CSS, the main idea is that all the elements up to the `Grid`
                        below must have a height of 100%.
                    */}
                <style>{`
                        body > div,
                        body > div > div,
                        body > div > div > div.login-form {
                        height: 100%;
                        }
                    `}</style>
                <Grid
                    textAlign='center'
                    style={{height: '100%',paddingTop:'15%'}}
                    
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header id="example2" as='h2' inverted
                                style={{
                                    fontSize: '1.7em',
                                    fontWeight: 'normal',
                                    marginTop: '1em',
                                }}
                                textAlign='center'>

                            Fill the form to start using it!

                        </Header>

                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='username' value={this.state.email}
                                    onChange={(e) => {
                                        this.setState({email: e.target.value})
                                    }}
                                />

                                <Form.Input type="password" fluid icon='key' iconPosition='left' placeholder='Password' value={this.state.password}
                                    onChange={(e) => {
                                        this.setState({password: e.target.value})
                                    }}
                                />
                                

                                
                                <Button type="submit" style={{marginRight: '1em', paddingRight: '0.8em'}} primary
                                        onClick={this.handleClick} loading={this.state.loading} size='huge'> Login <Icon
                                    name='sign in'/>
                                </Button>
                                <Message positive >
                                    <Message.Header>New User!</Message.Header>
                                    <p>Click <Link to='/register' > here to Register!</Link></p>
                                </Message>
                                <Message negative hidden={!this.state.warning}>
                                    <Message.Header>Login credentials are incorrect!</Message.Header>
                                    <p>Please try again</p>
                                </Message>
                            </Segment>

                        </Form>
                        {/* <Message>
                            New to us? <a href='#'>Sign Up</a>
                        </Message> */}
                    </Grid.Column>
                </Grid>
            </div>
        
        );
    }

}
