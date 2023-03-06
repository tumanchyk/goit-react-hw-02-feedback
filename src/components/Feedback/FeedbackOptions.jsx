import PropTypes from 'prop-types';
import { Button, List } from './Button.styled';
export default function FeedbackOptions({options, onLeaveFeedback}){
       return(
        <List>
            {options.map((option, index) => <li key={index}><Button onClick={onLeaveFeedback} name={option}>{option}</Button></li>)}
    </List>
       )
}

FeedbackOptions.propTypes = {
onLeaveFeedback: PropTypes.func,
}