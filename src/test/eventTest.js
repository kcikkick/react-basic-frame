import React from 'react';
class Toggle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }));
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn?'ON':'OFF'}
                </button>
            </div>
        );
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };
    }
    handleClick(e, id) {
        console.log(id);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn,
        }));
    }
    render(){
        return (
            <div>
                <button onClick={(e) => this.handleClick(e, '1')}>
                    {this.state.isToggleOn?'ON':'OFF'}
                </button>
            </div>
        );
    }
}

export default Toggle;