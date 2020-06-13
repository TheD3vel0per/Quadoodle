import React from "react";



class Timer extends React.Component {
    state = {
        counter: 30
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
    }

    render() {

        window.setInterval(() => {
            this.setState(prevState => ({
                counter: this.state.counter > 0 ? 0: prevState['counter'] - 1
            }))
        }, 1000);

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
