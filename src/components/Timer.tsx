import React from "react";



class Timer extends React.Component {
    state = {
        counter: 30
    };

    constructor(props) {
        super(props);
        this.state = {
            counter: 30
        }
    }

    componentDidMount() {
    const timer =
    this.state.counter > 0 && setInterval(() => this.setState( this.state.counter - 1), 1000);
      return () => clearInterval(timer);
    }


    render() {


        return (
            <>

                <div>
                    <div
                    style = {{width: "200px", height: "200px", border: "25px bold black" }}
                    
                    >Countdown: {this.state.counter}</div>
                </div>

            </>
        );
    }
}

export default Timer;
