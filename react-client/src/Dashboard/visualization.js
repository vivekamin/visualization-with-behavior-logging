import React, { Component } from 'react';
import { Button, Grid, Segment, Message } from 'semantic-ui-react';
import Axios from 'axios';
import Pie from './pie';
import Highcharts from 'highcharts';

let options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    credits: {
        enabled: false,
    },


    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },

}
class Visualization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagDict: {},
            tagViseUserData: [],
            activityUserData: [],
            pie1option: {},
            pie2option: {},
            pie3option: {},
            pie4option: {},
            pie5option: {},
            show: false
        }


    }
    async componentDidMount() {
        try {
            const response = await Axios.get(`http://localhost:3001/tags/${this.props.email}`);
            //console.log(response);
            let tags = response.data.tags;
            let tagArray = [];
            let tempTagDict = {};
            tags.map(obj => {
                let tag_name = obj.tag_name;
                //console.log(tag_name)
                if (tag_name != '' && tag_name.length > 1) {
                    //console.log(tag_name);
                    tagArray = tagArray.concat(tag_name.split(','));
                    //console.log(tagArray);
                }

            });
            //console.log(tagArray);
            tagArray.map(s => tempTagDict[s] = 0);
            tagArray.map(s => tempTagDict[s] += 1);
            //console.log(tempTagDict);
            let chartData = []
            Object.keys(tempTagDict).map((key, index) => {
                let tempObj = {};
                tempObj["name"] = key;
                tempObj["y"] = tempTagDict[key];
                chartData.push(tempObj);
            });
            //console.log(JSON.stringify(chartData));
            //this.setState({});

            console.log("Events starts from here.......");
            const response_events = await Axios.get(`http://localhost:3001/events/${this.props.email}`);
            console.log(response_events);
            let activities = response_events.data.events;
            let tempActivityDict = {};
            activities.map(obj => {
                if (obj.event_relevance && obj.event_name == "Click") {
                    tempActivityDict[obj.event_relevance] = (tempActivityDict[obj.event_relevance] || 0) + 1
                }
            });
            //activities.map( obj => tempActivityDict[obj.event_relevance] += 1);
            console.log(tempActivityDict);
            let eventChartData = []
            Object.keys(tempActivityDict).map((key, index) => {
                let tempObj = {};
                tempObj["name"] = key;
                tempObj["y"] = tempActivityDict[key];
                eventChartData.push(tempObj);
            });
            //this.setState({ activityUserData: eventChartData, tagViseUserData: chartData });
            console.log(this.state);
            let options1 = JSON.parse(JSON.stringify(options));
            options1.title = { text: "Your activity based on interaction using clicks" };
            options1.series = [{
                name: 'No. of times activity done',
                colorByPoint: true,
                data: eventChartData
            }];
            let options2 = JSON.parse(JSON.stringify(options));
            options2.series = [{
                name: 'No of Question Discovered',
                colorByPoint: true,
                data: chartData
            }];
            options2.title = { text: "Questions discovered by Tags" };


            //const response_events = await Axios.get(`http://localhost:3001/events/${this.props.email}`);
            //activities = response_events.data.events;
            let scrollTagArray = [];
            let tempActivityDictScroll = {};
            activities.map(obj => {
                if (obj.event_relevance && obj.event_name == "Scroll") {
                    let tag_name = obj.event_relevance;
                    //console.log(tag_name)
                    if (tag_name != '' && tag_name.length > 1) {
                        //console.log(tag_name);
                        scrollTagArray = scrollTagArray.concat(tag_name.split(','));
                        //console.log(tagArray);
                    }
                }
            });
            scrollTagArray.map(s => {
                if (s.length < 20) {
                    tempActivityDictScroll[s] = (tempActivityDictScroll[s] || 0) + 1;
                }
            });
            console.log(tempActivityDictScroll);
            let scrollChartData = []
            Object.keys(tempActivityDictScroll).map((key, index) => {
                let tempObj = {};
                tempObj["name"] = key;
                tempObj["y"] = tempActivityDictScroll[key];
                scrollChartData.push(tempObj);
            });

            let options3 = JSON.parse(JSON.stringify(options));
            options3.series = [{
                name: 'Amount of interaction',
                colorByPoint: true,
                data: scrollChartData
            }];
            options3.title = { text: "Your interested tags based activity you do and time spent" };


            const response_all = await Axios.get(`http://localhost:3001/tags`);
            tags = response_all.data.tags;
            let userTagDict = {};
            tags.map(obj => {
                let tag_name = obj.tag_name;
                //console.log(tag_name)
                if (tag_name != '' && tag_name.length > 1) {
                    //console.log(tag_name);
                    let tagArrayL = tag_name.split(',').length;
                    userTagDict[obj.email] = (userTagDict[obj.email] || 0) + tagArrayL;
                    //console.log(tagArray);
                }

            });
            console.log(userTagDict);
            let userTagData = []
            Object.keys(userTagDict).map((key, index) => {
                let tempObj = {};
                tempObj["name"] = key;
                tempObj["y"] = userTagDict[key];
                userTagData.push(tempObj);
            });

            let options4 = JSON.parse(JSON.stringify(options));
            options4.series = [{
                name: 'Number of tags discovered',
                colorByPoint: true,
                data: userTagData
            }];
            options4.title = { text: "Number of tags visited based on you and other users!" };

            const response_all_event = await Axios.get(`http://localhost:3001/events`);
            let all_events = response_all_event.data.events;
            //console.log(all_events);
            let userEventDict = {};
            all_events.map(obj => {
                userEventDict[obj.email] = (userEventDict[obj.email] || 0) + 1;
            });
            console.log(userEventDict);
            let userEventData = []
            Object.keys(userEventDict).map((key, index) => {
                let tempObj = {};
                tempObj["name"] = key;
                tempObj["y"] = userEventDict[key];
                userEventData.push(tempObj);
            });
            console.log(userEventData);

            let options5 = JSON.parse(JSON.stringify(options));
            options5.series = [{
                name: 'Total number of activities',
                colorByPoint: true,
                data: userEventData
            }];
            options5.title = { text: "Number of interactive actions based on you and other users!" };
















            this.setState({ pie1option: options2, pie2option: options1, pie3option: options3, pie4option: options4, pie5option: options5 })
        }
        catch (error) {
            console.log(error);
        }

    }

    render() {
        let tagdata = this.state.tagViseUserData;
        let activityData = this.state.activityUserData;
        console.log(tagdata, tagdata)
        return (
            <div>


                <Grid divided='vertically' >
                    <Grid.Row columns={2}>
                        <Grid.Column style={{ textAlign: 'right' }}>
                            <Button positive={!this.state.show} active={!this.state.show} size="massive" content='Individual User Visualization' icon='user' labelPosition='left' onClick={() => { this.setState({ show: false }) }} />
                        </Grid.Column>
                        <Grid.Column style={{ textAlign: 'left' }}>
                            <Button positive={this.state.show} active={this.state.show} size="massive" content='Comparative User Visualization ' icon='users' labelPosition='right' onClick={() => { this.setState({ show: true }) }} />
                        </Grid.Column>
                    </Grid.Row>


                </Grid>
                <Segment hidden={this.state.show}>
                    <Message
                        header='Personalized Interaction Analysis(User Model)'
                        content='This visualization is based on solely your interaction with StackOverflow.'
                    />
                    <Grid divided='vertically'>
                        <Grid.Row stackable columns={2}>
                            <Grid.Column>
                                <Pie options={this.state.pie1option} highcharts={Highcharts} />
                                <Message
                                    color='yellow'
                                    header='What this Graphs shows and why I choose to visualize?'
                                    list={[
                                        'This graphs shows distribution of Tags visited based on number of Questions Viewed.',
                                        'Using ths we can conclude what different technologies user is into',
                                        'How many question user has explored for which tags and what user is most likely to be(Front end, Backe end or Full Stack)',
                                    ]}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Pie options={this.state.pie2option} highcharts={Highcharts} />
                                <Message
                                    color='yellow'
                                    header='What this Graphs shows and why I choose to visualize?'
                                    list={[
                                        'This graphs shows what types of activities user has done how many time.',
                                        'Using this we can conclude what user most of the time use stackoverflow for',
                                        'How user is likely to use the system in future or how we can attract user for different activities'
                                        ]}
                                />
                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                    <Grid divided='vertically'>
                        <Grid.Row stackable columns={1}>
                            <Grid.Column>
                                <Pie options={this.state.pie3option} highcharts={Highcharts} />
                                <Message
                                    color='yellow'
                                    header='What this Graphs shows and why I choose to visualize?'
                                    list={[
                                        'This graphs shows what are more interested tags for user based on activity, scroll and time spent on particular tagged questions.',
                                        'Using ths we can conclude what users most interested tags are',
                                        ]}
                                />
                            </Grid.Column>
                            

                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment hidden={!this.state.show}>
                    <Message
                        header='Comparative Interaction Analysis(Open User Model)'
                        content='This visualization is based on all of the users interaction with StackOverflow.'
                    />
                    <Grid divided='vertically'>
                        <Grid.Row stackable columns={2}>
                            <Grid.Column>
                                <Pie options={this.state.pie4option} highcharts={Highcharts} />
                                <Message
                                    color='yellow'
                                    header='What this Graphs shows and why I choose to visualize?'
                                    list={[
                                        'This graphs shows comparative interest of different users based on the number of Tags explored by each of them.',
                                        'This can be used to figure out where a individual stands based on scale of diverse knowledge base',
                                        ]}
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Pie options={this.state.pie5option} highcharts={Highcharts} />
                                <Message
                                    color='yellow'
                                    header='What this Graphs shows and why I choose to visualize?'
                                    list={[
                                        'This graphs shows comparative amount of different activities done by different users.',
                                        'This can be used to evaluate how much active users are and where an individual stands compare to others',
                                        ]}
                                />
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Segment>

            </div>
        );
    }

}

export default Visualization;