import React, {Component} from 'react';
import {Segment, Grid, Header, Form, Button, Icon, Message} from 'semantic-ui-react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
            email:'',
            password:'',
            confirm_password:'',
            warning:false
           
        }
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount() {
        
    }


    async handleClick ()  {
        console.log(this.state);
        if(this.state.password != this.state.confirm_password){
            this.setState({warning:true});
        }
        else{
            try{
                var obj = {
                    first_name: this.state.fname,
                    last_name: this.state.lname,
                    email: this.state.email,
                    password: this.state.password
                }
                const response = await Axios.post(`http://localhost:3001/register`, obj);
                this.setState({success:true});
                this.setState({warning:false});
    
    
            }
            catch(error){
                console.log(error);
                this.setState({warning:true});

            }

        }
        


    }

    render() {

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
                            <Form.Group widths='equal'>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='First Name' type='text' value={this.state.fname}
                                    onChange={(e) => {
                                        this.setState({fname: e.target.value})
                                    }}
                                />
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='Last Name' type='text' value={this.state.lname}
                                    onChange={(e) => {
                                        this.setState({lname: e.target.value})
                                    }}
                                />
                                </Form.Group>
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
                                <Form.Input type="password" fluid icon='key' iconPosition='left' placeholder='Confirm Password' value={this.state.confirm_password}
                                    onChange={(e) => {
                                        this.setState({confirm_password: e.target.value})
                                    }}
                                />
                                
                                

                                <Button as={Link} to='/' primary size='huge'  style={{margin: '1em'}}>
                                    Home
                                </Button>
                                <Button type="submit" style={{marginRight: '1em', paddingRight: '0.8em'}} primary
                                        onClick={this.handleClick}  size='huge'> Register <Icon
                                    name='sign in'/></Button>
                                <Message negative hidden={!this.state.warning}>
                                    <Message.Header>Password mismatch! or Username already exist!</Message.Header>
                                    <p>Please try again</p>
                                </Message>
                                <Message positive hidden={!this.state.success}>
                                    <Message.Header>Registration successful!</Message.Header>
                                    <p>Click <Link to='/login' > here to Login!</Link></p>
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
