import React, {Component} from 'react';
import {Segment, Grid, Header, Form, Button, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import TypeIt from 'typeit';

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
           
        }


    }

    componentDidMount() {
        var instance = new TypeIt('#example2', {
            speed: 50,
            breakLines: false,
            autoStart: false,
            html: true
        }, false);

        instance.init()
        
    }


    handleClick = () => {
        

    }

    render() {

        return (
            <div className='login-form' >
                
                <Grid
                    textAlign='center'
                    style={{paddingTop:'15%'}}
                    
                >
                <Grid.Column style={{maxWidth: 450}}>
                        <Header id="example2" as='h2' 
                                style={{
                                    fontSize: '1.7em',
                                    fontWeight: 'normal',
                                    marginTop: '1em',
                                }}
                                textAlign='center'>

                            Start using the application!

                        </Header>
                
                
                <Button as={Link} to='/register' primary size='huge'  style={{margin: '1em'}}>
                    Register
                </Button>
                <Button as={Link} to='/login' primary size='huge' style={{margin: '1em'}}>
                    Login
                </Button>
                </Grid.Column>
            </Grid>

        </div>
        );
    }

}
