function tick(){
    const element = (
        <div>
            <h1>Hello</h1>
            <h1>It is {new Date().toLocaleDateString()}.</h1>
        </div>
    );
    return element;
}
export default tick;