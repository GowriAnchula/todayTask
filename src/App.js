import React from 'react';
import './App.scss';
import Stepper from './stepper/stepper';
import Stepper1 from './stepper/stepper1';
import Stepper2 from './stepper/stepper2';
import MobileView from './stepper/mobileView'

class App extends React.Component{
  
  constructor(){
    super()
    this.state={
      currentStep:1
    }
  }
  handleClick=(clickType)=>{
    const {currentStep} =this.state
    let newStep = currentStep
    clickType === "next" ? newStep++ : newStep--
    if(newStep > 0 && newStep <= 4)
      this.setState({
        currentStep:newStep
      })
  }
  render(){
    const stepsArray = ["shipping","payment","Review"]
   
    const {currentStep} = this.state
    console.log(currentStep)
    return (
      <>
         <div className="stepper-container-horizontal">
           <div className="d-none d-md-block d-lg-block d-xl-block">
           <h1>Desktop view</h1><br/>
           <Stepper steps={stepsArray} direction="horizontal" currentStepNumber={2} /><br/>
           <Stepper1 steps={stepsArray} direction="horizontal" currentStepNumber={1}/><br/>
           <Stepper2 steps={stepsArray} direction="horizontal" currentStepNumber={3}/><br/><br/>
           </div>
           <div className="d-none d-sm-block d-md-none d-lg-none">
           <h1>Mobile view</h1><br/>
           <MobileView steps={stepsArray} direction="vertical" currentStepNumber={2}/><br/><br/>
           <MobileView steps={stepsArray} direction="vertical" currentStepNumber={1}/><br/><br/>
           <MobileView steps={stepsArray} direction="vertical" currentStepNumber={3}/>
         </div>
         </div>
          {/* <div className="buttons-container">
           <button onClick={()=>this.handleClick()}>Previous</button>
           <button onClick={()=>this.handleClick("next")}>Next</button>
         </div>  */}
         </>
    );
  }
  
}

export default App;
