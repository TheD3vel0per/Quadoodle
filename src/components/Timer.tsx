import React from "react";


export default class Timer extends React.Component {
    state = {
        seconds: 30,
    };

    constructor(props) {
        super(props);
    }

    //  componentDidMount() {
    //     this.myInterval = setInterval(() => {
    //         const { seconds} = this.state

    //         if (seconds > 0) {
    //             this.setState(({ seconds }) => ({
    //                 seconds: seconds - 1
    //             }))
    //         }
    //         if (seconds === 0) {
    //                 clearInterval(this.myInterval)
    //         } 
    //     }, 1000)

    //  }

    //  componentWillUnmount() {
    //     clearInterval(this.myInterval)
    //  }

    render() {

        const {seconds} = this.state

        return (
            <>

                <div>
                    <div
                    style = {{width: "200px", height: "200px", border: "25px bold black" }}
                    
                    >Countdown: {this.state.seconds}</div>
                </div>

            </>
        );
    }
}

