import React, { Component } from 'react';
class Add  extends Component {
 Addclick= ()=>{
    this.props.addclickHandler();
 }
render(){
    return(
        <div onClick={this.Addclick}> ADD</div>
    )
}
}
export default Add;