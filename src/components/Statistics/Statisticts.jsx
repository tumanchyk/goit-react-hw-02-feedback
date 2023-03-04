import { StatList, Result } from "./Statistics.styled";
export default function Statistics({good, neutral, bad, total, positivePercentage}){
   return(
    <StatList>
    <Result>Good: {good}</Result>
    <Result>Neutral: {neutral}</Result>
    <Result>Bad: {bad}</Result>
    <Result>Total: {total}</Result>
    <Result>Positive feedback: {positivePercentage || 0}%</Result>
</StatList>
   )
}