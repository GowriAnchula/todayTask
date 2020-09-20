import React from 'react'
import './stepper.scss'

function Steps(props){
    const {step} = props
    return(<><div className="step-wrapper">
    <div className={`stepper-description ${step.highlighted && "step-description-active"}`} >{step.description}</div>
    <div className={`step-number ${step.selected ?  "step-number-active" : "step-number-disabled" } `}>{step.completed ? <span>&#10003;</span> : index + 1} </div>
    <div className={index !== step.length - 1 && `divider-line divider-line-${step.length}`}></div>
</div></>)
}
export default Steps
