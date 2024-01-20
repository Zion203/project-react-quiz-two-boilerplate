import React, { Component } from 'react'
import "./quiz.css"
import question from "../resources/quizQuestion.json"

class QuizComponent  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         index : 0
      }
    }

    increment (){
      if (this.state.index >13){
        alert("This is the Last Question Cant Go net question")
      }else{
        this.setState((prev)=>({
          index : prev.index+1
        }))
      }
    }

    decrement (){
      if (this.state.index <1){
        alert("Cant go to previous Question This is the First Question")
      }else{
        this.setState((prev)=>({
          index : prev.index-1
        }))
      }
    }
    quit(){
      alert("Are you sure you want to quit ?")
      this.setState({
        index : 0
      })
    }
  render() {
    return (
      <>
        <div id='quizContent'>
            <h1>Question</h1>
            <p id='quesNo'>{this.state.index+1}of 15</p>
            <h2 id='question'>{question[this.state.index].question}</h2>
            <div id='choices'>
                <div>{question[this.state.index].optionA}</div>
                <div>{question[this.state.index].optionB}</div>
                <div>{question[this.state.index].optionC}</div>
                <div>{question[this.state.index].optionD}</div>
            </div>
            <div id='buttons'>
                <div></div>
                <div onClick={()=>{this.decrement()}}>Previous</div>
                <div onClick={()=>{this.increment()}}>Next</div>
                <div onClick={() =>{this.quit()}}>Quit</div>
                <div></div>
            </div>
        </div>
      </>
    )
  }
}

export default QuizComponent 