import React from 'react';

function Contacts() {
    return (
        <div>Constacts</div>
    );
}

function Chat() {
    return (
        <div>Chat</div>
    );
}

function SplitPane(props) {
    return (
        <div className="SplitPanel">
            <div className="SplitPanel-left">
                {props.left}
            </div>
            <div className="SplitPanel-right">
                {props.right}
            </div>
            {props.children}
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<SplitPane left={<Contacts></Contacts>}
            right={<Chat></Chat>}>
            <label>11111111</label>
            <h2>22222</h2>
            </SplitPane>);
    }
}

export default App;