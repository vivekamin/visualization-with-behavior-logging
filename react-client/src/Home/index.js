import React, {Component} from 'react';
import {Segment, Grid, Header, Form, Button, Icon} from 'semantic-ui-react'

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:'',
            lname:'',
            email:'',
            password:'',
            confirm_password:''
           
        }


    }

    componentDidMount() {
        
    }


    handleClick = () => {
        

    }

    render() {

        return (
            <div className='login-form'>

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
                    style={{height: '100%'}}
                    verticalAlign='middle'
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
                                <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' value={this.state.email}
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
                                
                                

                            
                                <Button type="submit" style={{marginRight: '1em', paddingRight: '0.8em'}} primary
                                        onClick={this.handleClick} loading={this.state.loading} size='huge'> Register <Icon
                                    name='sign in'/></Button>
                                {/* <Message negative hidden={!this.state.warning}>
                                    <Message.Header>Login credentials are incorrect!</Message.Header>
                                    <p>Please try again</p>
                                </Message> */}
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
