import React, { Component } from "react";

/**
 * This component fetches the current price of Bitcoin from the Server-side API
 * and displays it on the page.
 */
class BitcoinPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            btc: []
        };
    }
    /**
     * This function is called when the component is first mounted.
     */
    componentDidMount() {
        this.fetchBitcoinPrice(); // Fetch Bitcoin price initially
        this.interval = setInterval(this.fetchBitcoinPrice, 10000); // Fetch Bitcoin price every 10 seconds
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    /**
     * This function fetches the current price of Bitcoin from the Server-side API.
     * It then updates the state of the component with the fetched data.
     */
    fetchBitcoinPrice = () => {
        fetch('http://localhost:8999/api/main')
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        btc : Object.values(data.bpi.USD)
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
    /**
     * This function renders the component.
     * @returns The current price of Bitcoin.
     */
    render() {
        const { error, isLoaded, btc } = this.state;
        console.log(btc);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            //@return The current price of Bitcoin.
            return (
                <ul>
                    Current Price of Bitcoin: ${btc[4].toFixed(2)}
                </ul>
            );
        }
    }
}
export default BitcoinPrice;
