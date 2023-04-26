import React, { Component } from 'react';
import Data from './Data'

export default class Profile extends Component {
    state={
        show:true,
        count:0
    }
    handleClick=()=>{
        this.setState({show:!this.state.show})
    }
    componentDidMount(){
   setInterval(()=>this.setState({count:this.state.count+1}),1000)}
    render() {
        return (
            <div>
              {this.state.show?<Data fullName="Firas SILINI" bio="Spécialité Marbre" profession="BussinessMan"/>:null}  
              <button className="butt" onClick={this.handleClick}>Toogle show</button>
              <h2>{this.state.count}</h2>
            </div>
        )
    }
}