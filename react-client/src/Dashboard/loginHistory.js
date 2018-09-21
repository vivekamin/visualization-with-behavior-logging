import React, {Component} from 'react';
import { Table , Grid, Segment, Message} from 'semantic-ui-react';

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
                <Segment textAlign="left">
                <Message
                        color="blue"
                        header='Actions logged and the reason behind logging them'
                        list={[
                            'Profile users are made on the basis of how user interact with the StackOverflow website. Our logged actions help us to determine what kind of user it is.',
			                'Questions Viewed: - This activity gets how many numbers of questions the user has viewed and tags regarding those question to learn the interest of the user',
                            'Scroll:- Gives an estimated amount of time spent on particular tags. So that we can determine what users is want to learn more about and his learning pattern.',
                          
                            'Questions Answered:- Gives an insight about what users expertise into and what user want other people to know about. This can also be used to analyze that how man people are collaborative int the system.',
                            'Questions Asked:- Used to learn what User is trying to learn and what others are also trying to learn. So that we can show the user what are some of the trending technologies to learn.',
                            'Comments:- Depicts user expertise and interest in that topic and How much interactive a user is',
                            'Bookmark:- Clear indication of a user finding something useful. ',
                            'Upvotes:- Shows that the user benefitted from this post. This can help in calculating how active a user is on StackOverflow',
                            'Downvotes:- Shows that the user disliked this post. This can be used for what type of question the user is more likely to downvote'
                        ]}
                    />
                    < br />
                    <Grid>
                    
                    <h2> Visualizations </h2>
                    <Grid.Row >
                    <h3 > Visualization 1 - <u> Individual User Visualization </u> - Consist <u>3</u> different types of visualization.  </h3>
                    <p>
                        <ul>
                            <li>Based on questions viewed we classify how many different type of Tags(e.g Java, C.) user has explored and how much frequently</li>
                            <li>Other visualization is to show user what different type of activities user has done on website(eg. Question Viewed, Vote Up Question, Bookmark Question,..etc)</li>
                            <li>User spends more time on questions or tags, he is interested. Next visualization is to give users most time spend and interactive tags(Based on amount of scroll and time user has spent) </li>
                            <li>If you select on one activity it shows the comparison of that activity with other users</li>
                            <li>All these, Visualization can be used to determine, what are users interest and what type of interactivity user is more likely to do</li>
                        </ul>
                    </p>
                    </Grid.Row>
                    <Grid.Row>
                    <h3> Visualization 2 -   <u> Comparative User Visualization </u> - Consist <u>2</u> different types of visualization.</h3>
                    <p>
                        <ul>
                            <li>It shows the relative interested number of tags for different topics in stackoverflow for different users</li>
                            <li>Different type of user uses platform in different way, so next visualization is to show how much interactive all users are compare to each other</li>
                            <li>This can provide insight into what type of people using the system and how much interactive they are</li>
                        </ul>
                    </p>
                    </Grid.Row>
                    </Grid>
                </Segment>
                
                <Grid
                    textAlign='center'
                    style={{height: '100%',paddingTop:'5%'}}
                    
                    
                >
                <Table inverted style={{maxWidth: '40%'}} >
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell textAlign='center'>Login History----</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.props.login_history.map(function(obj, index){
                    return (
                        <Table.Row textAlign='center' key={ index }>
                            <Table.Cell >{
                                "Loggedin on " + new Intl.DateTimeFormat('en-US', { 
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
                    <Table.HeaderCell textAlign='center'>You logged in total {this.props.login_history.length} times!</Table.HeaderCell>
                    
                </Table.Row>
                </Table.Footer>
            </Table>
            </Grid>
            </div>
        );
    }
  
}

export default LoginHistory;