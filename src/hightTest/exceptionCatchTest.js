import React from 'react';




class ExceptionBoundaryTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render(){
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2> Something went wrong.</h2>
                    <details style={{whiteSpace: "pre-wrap"}}>
                        {this.state.error && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )    
        }
        return this.props.children;
    }
}




class ExceptionButtonTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    addCount(){
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    render(){
        if (this.state.count === 5) {
            throw new Error('Has crashed test');
        }
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount.bind(this)}>点击</button>
            </div>
        )
    }
}




class ExceptionCatchTest extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <p>This is an example of error boundaries in React 16</p>
                <ExceptionBoundaryTest>
                    <ExceptionButtonTest></ExceptionButtonTest>
                </ExceptionBoundaryTest>
            </div>
        )
    }
}


export default ExceptionCatchTest;