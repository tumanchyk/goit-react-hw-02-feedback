import PropTypes from 'prop-types';
import { Button, List } from './Button.styled';
export default function FeedbackOptions({onLeaveFeedback}){
       return(
        <List>
        <li><Button onClick={onLeaveFeedback} name='good'>Good</Button></li>
        <li><Button onClick={onLeaveFeedback} name='neutral'>Neutral</Button></li>
        <li><Button onClick={onLeaveFeedback} name='bad'>Bad</Button></li>
    </List>
       )
}

FeedbackOptions.propTypes = {
onLeaveFeedback: PropTypes.func,
}