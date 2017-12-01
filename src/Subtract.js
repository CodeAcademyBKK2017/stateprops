import React, { Component } from 'react';
class Subtract  extends Component {
 subtractclick= ()=>{
    this.props.subclickHandler();
 }
render(){
    return(
        <div onClick={this.subtractclick}> SUBTRACT</div>
    )
}
}
export default Subtract;