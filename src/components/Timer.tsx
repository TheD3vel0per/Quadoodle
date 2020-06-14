import React from "react";


class Timer extends React.Component {
    state = {
        seconds: 30,
    };

    constructor(props) {
        super(props);
    }




    render() {

        const {seconds} = this.state

        return (
            <>

                <div>
                {/* <Countdown date={Date.now() + 5000}>
                      <Completionist />
                </Countdown> */}

                </div>
            </>
        );
    }
}

export default Timer;