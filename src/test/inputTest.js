import React from 'react';
class FormTest extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        };
    }

    handleSubmit(event) {
        console.log(this.state.name);
        event.preventDefault();
    }
    handleChange(event) {
        this.setState({
            name: event.target.value,
        })
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type='text' value={this.state.name} onChange={this.handleChange.bind(this)} />
                <label>{this.state.name}</label>
            </form>
        </div>
        );
    }
} 
export default FormTest;