import React from 'react'
import PropTypes from 'prop-types'
import './stepper.scss'

export default class Stepper2 extends React.Component{
    constructor(props){
        super()
        this.state={
            mobileSteps:['step','shipping','payment','Review']  
        }
    }
   
    render(){
        const {direction} = this.props
 
        return(<>
             <div className={`stepper-wrapper-${direction}`}></div>
             <div className="step-number-mobileview">{this.props.currentStepNumber}</div>
            <span>of 3</span> &nbsp; &nbsp; &nbsp;
             <span className="step-currentState">{this.state.mobileSteps[this.props.currentStepNumber]}</span><br/>
        <span className="step-Next">Next:{this.props.currentStepNumber !== 3 ? this.state.mobileSteps[this.props.currentStepNumber + 1] : 'Done'} </span>
             </>
            
        )
    }
}

Stepper2.propTypes ={
    direction :PropTypes.string.isRequired,
    steps:PropTypes.array.isRequired
}

