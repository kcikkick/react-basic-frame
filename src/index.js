import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './test/appClockTest';
// import App from './test/eventTest';
// import App from './test/forTest';
// import App from './test/inputTest';
// import App from './test/slotScopeTest';
// import App from './hightTest/suspenseTest';
import * as serviceWorker from './serviceWorker';

// import App from './hightTest/contextTheme';

import App from './hightTest/exceptionCatchTest';

ReactDOM.render(<App></App>, document.getElementById('root'));

/**
 *  case 1 time tick
 */

// function tick(){
//     const element = (
//         <div>
//             <h1>Hello</h1>
//             <h1>It is {new Date().toLocaleTimeString()}.</h1>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

/**
 *  case 2 clock component with props
 */
// function Clock(props) {
//     return (<div>
//         <h1>Hello</h1>
//         <h1>It is {props.date.toLocaleTimeString()}.</h1>
//     </div>);
// }

// function tick(){
//     ReactDOM.render(<Clock date={new Date()}></Clock>, document.getElementById('root'));
// }
// setInterval(tick, 1000);


/**
 * case 3 change to es6
 */

// class Clock extends React.Component {
//     render(){
//         return (<div>
//             <h1>Hello</h1>
//             <h1>It is {this.props.date.toLocaleTimeString()}.</h1>
//         </div>);
//     }
// }

//  function tick(){
//     ReactDOM.render(<Clock date={new Date()}></Clock>, document.getElementById('root'));
// }
// setInterval(tick, 1000);



/**
 * case 4 change to es6 with state
 */

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             date: new Date(),
//         };
//     }
//     componentDidMount(){
//         this.timerID = setInterval(()=>{
//             this.setState({
//                 date: new Date(),
//             });
//         }, 1000);
//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID);
//     }

//     render(){
//         return (<div>
//             <h1>Hello</h1>
//             <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
//         </div>);
//     }
// }

// ReactDOM.render(<Clock date={new Date()}></Clock>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
