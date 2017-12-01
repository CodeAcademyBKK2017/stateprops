import React from 'react';
class ButtonAdd extends React.Component{
    state = {
        text:0
    }
    addValue = () => {
        let newState = this.state.text + 1;
        this.setState({
          text:newState
        });
    }
    render(){
        const bt1 = {
            padding: '10px',
            fontSize: '30px',
            fontWeight: '600',
            background: '#ffb000'
        }
        return <button style={bt1} onClick={this.addValue}>Add</button>
    }
}
export default ButtonAdd;