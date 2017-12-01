import React from 'react';

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
                <input type="text" value={this.state.data} />
                <button onClick={this.addFn}>ADD</button>
                <button onClick={this.subtractFn}>SUBTRACT</button>
            </div>
        );
    }
}

export default Counter;
