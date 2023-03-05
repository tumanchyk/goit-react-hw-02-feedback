import React, {Component} from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./Feedback/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback(){
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage(){
    const percentage = (this.state.good / this.countTotalFeedback()) * 100
    return Math.round(percentage)
  } 
  onLeaveFeedback = e => {
    const name = e.currentTarget.name;
    this.setState(prevState => {
      return{[name]: prevState[name] + 1}})
    }
    

  render (){
    const { good, neutral, bad } = this.state;
    return (
    <>
  <Section title="Please leave feedback">
  <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}/>
  </Section>
  
  <Section title="Statistics">
   { this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}></Statistics> : <Notification message="There is no feedback"/>}
  </Section>
    </> 
    )
  }  
}
