import PropTypes from 'prop-types';

import { Result } from "./Statistics.styled";
export default function Statistics({good, neutral, bad, total, positivePercentage}){
   return(
    <ul>
    <Result>Good: {good}</Result>
    <Result>Neutral: {neutral}</Result>
    <Result>Bad: {bad}</Result>
    <Result>Total: {total}</Result>
    <Result>Positive feedback: {positivePercentage || 0}%</Result>
</ul>
   )
}
Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.number.isRequired,
   positivePercentage: PropTypes.number.isRequired,
}
