import React from 'react';
//import {Pie, Palette} from 'react-chartjs-2';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// let options = {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     credits: {
//         enabled: false,
//     },
    
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                 style: {
//                     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                 }
//             }
//         }
//     },
    
//   }
  

// const data = {
// 	labels: [
// 		'Red',
// 		'Green',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: Palette('tol', data.length).map(function(hex) {
//             return '#' + hex;
//           }),
		
// 	}]
// };

// class Pie extends Component{
//     constructor(props) {
//         super(props);
//         console.log(props);
//         this.state = {
//             options: options
//         }
//         options.series = [{
//             name: 'Brands',
//             colorByPoint: true,
//             data: props.data
//         }];
//         options.title = {text : props.title};
//     }

//     componentDidMount() {
//         this.setState({options:options});
//         console.log(options);
//     }

  
  

//   render() {
    
//     return (
//         <div>
//         <HighchartsReact
//           highcharts={Highcharts}
//           options={this.state.options}
//         />
//       </div>
//     );
//   }
// }
const Pie = ({ options, highcharts }) => <HighchartsReact
  highcharts={highcharts}
  options={options}
/>

export default Pie;