import React, {Component} from 'react';
import {Label, Menu, Button, Grid, Segment} from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';
import LoginHistory from './loginHistory';
import Visualization from './visualization';
import Axios from 'axios';

export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            toLogin: false,
            login_history: [],
            visualize: false
           
        }
        
    }

     async componentDidMount() {
        if(sessionStorage.getItem("jwt") == null){
            console.log("nologgin");
            this.setState({toLogin:true});
        }else{
            console.log(this.props.location.state && this.props.location.state.email);
            let email = this.props.location.state.email;
            this.setState({email:email});
            console.log(sessionStorage.getItem("jwt")); 
            var config = {
                headers : { Authorization: `Bearer ${sessionStorage.getItem("jwt")}`}
            }
            try{
                const response = await Axios.get(`http://localhost:3001/login_history?email=${email}`, config);
                console.log(response.data.users);
                this.setState({login_history: response.data.users});
                console.log(this.state);

            }
            catch(error){
                console.log(error);
            }
        }
        

        

    }


    handleClick = () => {
        

    }
    handleLogout = () => {
        console.log("here")
        this.setState({toLogin:true});
        sessionStorage.removeItem("jwt");

    }

    render() {
        if (this.state.toLogin) {
            return <Redirect push to={{pathname: "/login"}}/>;
        }

        return (
            
            <div >
                <Menu pointing secondary>
                  
                  <Menu.Item>Welcome to dashboard, <Label as='a'>{this.state.email}</Label> </Menu.Item>
                        
  
                    <Menu.Menu position='right'>
                          
                          <Button icon="power"  onClick={this.handleLogout} content='SignOut' />
                      </Menu.Menu>
                  </Menu>
                  <Segment
                    textAlign='center'
                    style={{paddingTop:'5%'}}
                    verticalAlign='middle'
                    
                >
                  <Button primary size='huge'  style={{margin: '1em'}} onClick={(e)=>{this.setState({visualize:false})}}>
                    Login History
                  </Button>
                  <Button  primary size='huge' style={{margin: '1em'}} onClick={(e)=>{this.setState({visualize:true})}}>
                    Visualization
                  </Button>
                  {!this.state.visualize && <LoginHistory login_history={this.state.login_history}/>}
                  {this.state.visualize && <Visualization />}
                  </Segment>
                  
                
                
            </div>
        
        );
    }

}
