import React from 'react';
import './Counter.style.css';

class Counter extends React.Component {
    state = {
        data: 0
    }
    addFn = () => {
        this.setState({ data: this.state.data + 1 });
    }
    subtractFn = () => {
        this.setState({ data: this.state.data - 1 });
    }
    render() {
        return (
            <div>
                <div style={{ textAlign: "center" }}>
                    <input className="Counter-box" type="text" value={this.state.data} />
                </div>
                <div style={{ textAlign: "center", marginTop: "90px" }}>
                    <button className="Counter-button Counter-button--yellow" onClick={this.addFn}>ADD</button>
                    <button className="Counter-button Counter-button--green" onClick={this.subtractFn}>SUBTRACT</button>
                </div>
            </div>
        );
    }
}

export default Counter;
