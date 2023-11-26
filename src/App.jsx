//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

class App extends React.Component{
    constructor(){
      super();
      this.state = {
        measure : 0
      }
    }


    increaseeMasure = () => {
      this.setState ({
        measure:this.state.measure += 1
      });
    }

    decreaseMeasure = ()=>{
      if(this.state.measure >0 ){
        this.setState({measure:this.state.measure -=1});
      }
    }
    
   resetMeasure = () => {
    this.setState({measure:0})
   }

   render(){
    return (
      <>
      <div className='heading' > Counter App </div>
      <div className='count'> {this.state.measure}</div>
       <div id='button'>
         <button><div className='add' onClick={this.increaseeMasure}>+</div></button>
         <button><div className='sub' onClick={this.decreaseMeasure}>-</div></button>
          <button><div className='reset' onClick={this.resetMeasure}>reset</div></button>
       </div>
      </>
    )
   }
}
export default App
