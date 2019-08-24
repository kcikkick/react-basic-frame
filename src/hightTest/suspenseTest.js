import React, {Suspense, lazy} from 'react';

function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds) {
        console.log(new Date().getTime());
    }//暂停一段时间 10000=1S。
}



function LoadComponent() {
    // sleep(3000);
    return (<div>Hi welcome to my home....</div>)
}


class SuspenseTest extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>

            <Suspense  fallback={<div>Loading...</div>}>
                <LoadComponent></LoadComponent>
            </Suspense>

        </div>);
    }
}


export default SuspenseTest;