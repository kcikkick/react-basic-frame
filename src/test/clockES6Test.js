
import React from 'react';

class Clock extends React.Component {
    render(){
        return (<div>
            <h1>Hello</h1>
            <h1>It is {this.props.date.toLocaleTimeString()}.</h1>
        </div>);
    }
}
export default Clock;