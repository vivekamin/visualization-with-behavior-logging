import React, {Component} from 'react';
import { Table , Grid} from 'semantic-ui-react';

class LoginHistory extends Component {
    constructor(props){
        super(props);
        this.state={

        }


    }
    componentDidMount(){
        console.log("In login history componenet", this.props);
    }
    render() {
        console.log("In login history componenet render", this.props);
        return (
            <div>
                <Grid
                    textAlign='center'
                    style={{height: '100%',paddingTop:'5%'}}
                    verticalAlign='middle'
                    
                >
                <Table inverted style={{maxWidth: '20%'}} >
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Login History----</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.props.login_history.map(function(obj, index){
                    return (
                        <Table.Row key={ index }>
                            <Table.Cell>{
                                new Intl.DateTimeFormat('en-US', { 
                                    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' , hour: 'numeric', minute:'numeric',second:'numeric'
                                }).format(new Date(obj.login_time))
                                }
                            </Table.Cell>
                        </Table.Row>
                    )
                  })}
                
                    
                
                </Table.Body>

                <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell>You logged in total {this.props.login_history.length} times!</Table.HeaderCell>
                    
                </Table.Row>
                </Table.Footer>
            </Table>
            </Grid>
            </div>
        );
    }
  
}

export default LoginHistory;