import React from 'react'
import PropTypes from 'prop-types'
import './stepper.scss'

export default class Stepper1 extends React.Component{
    constructor(){
        super()
        this.state={
           
            steps:[]   
        }
    }
    componentDidMount(){
        const {steps,currentStepNumber} = this.props
        const stepsState = steps.map((step,index)=>{
            const stepObj ={};
            stepObj.description = step;
            stepObj.completed = false;
            stepObj.highlighted = index === 0 ? true : false
            stepObj.selected = index === 0 ? true : false
            return stepObj
        })
        const currentSteps = this.upadateStep(currentStepNumber - 1,stepsState)
        this.setState({
            steps:currentSteps
        })
    }
    componentDidUpdate(prevProps){
        if(prevProps.currentStepNumber !== this.props.currentStepNumber){
            const {steps} = this.state
            const currentSteps = this.upadateStep(this.props.currentStepNumber - 1,steps)
        this.setState({
            steps:currentSteps
        })

        }
    }
    upadateStep(stepNumber,steps){
        const newSteps = [...steps]
        let stepCounter = 0
        while(stepCounter < newSteps.length){
            if(stepCounter === stepNumber){
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted:true,
                    selected:true,
                    completed:false    
                }
                stepCounter++;
            }
            else if(stepCounter < stepNumber){
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted:false,
                    selected:true,
                    completed:true    
                }
                stepCounter++
            }
            else{
                newSteps[stepCounter] = {
                    ...newSteps[stepCounter],
                    highlighted:false,
                    selected:false,
                    completed:false    
                }
                stepCounter++
            }
        }
        return newSteps
    }
    render(){
        const {direction} = this.props
        const {steps} =this.state
        const stepsDisplay = steps.map((step,index)=>{
            return(<>
                <div className="step-wrapper" key={index}>
                    <div className={`stepper-description ${step.highlighted && "step-description-active"}`} >{step.description}</div>
                    <div className={`step-number ${step.selected ?  "step-number-active" : "step-number-disabled" } `}>{step.completed ? <span>&#10003;</span> : index + 1}</div>
                    <div className={index !== steps.length - 1 ? ` divider-line divider-line-${steps.length}` : ""}> </div>
                </div>
                {/* <Steps step={this.state.steps}/> */}
                </>
            )
        })
        return(
             <div className={`stepper-wrapper-${direction}`}>{stepsDisplay}</div>
        )
    }
}

Stepper1.propTypes ={
    direction :PropTypes.string.isRequired,
    steps:PropTypes.array.isRequired
}

