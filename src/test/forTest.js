import React from 'react';
class Blob extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
                {id: 2, title: 'Installation', content: 'You can install React from npm.'},
            ],
        };
    }

    buildSideBar() {
        const posts = this.state.posts;
        const sideBar = posts.map((post) => 
            <li key={post.id}>{post.title}</li>
            );
        return (
            <ul>
                {sideBar}
            </ul>
        );
    }
    buildContent() {
        const posts = this.state.posts;
        const content = posts.map(post => 
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
        return (
            <div>
                {content}  
            </div>
        );
    }
    render(){
        return (<div>
            {this.buildSideBar()}
            <hr></hr>
            {this.buildContent()}
        </div>);
    }
}
export default Blob;