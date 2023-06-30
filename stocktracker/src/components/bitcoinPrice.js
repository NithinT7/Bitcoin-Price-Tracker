import React, { Component } from "react";

class BitcoinPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            btc: []
        };
    }
    componentDidMount() {
        fetch("http:localhost:8999/api/main")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        btc : data
                    });
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, btc } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>

                    {btc.map((s) => ((<li>{s.time}</li>)))}
                </ul>

            );
        }
    }
}
export default BitcoinPrice;
