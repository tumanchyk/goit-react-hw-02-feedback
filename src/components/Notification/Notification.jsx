import PropTypes from 'prop-types';
import {NotificationMessage} from './Notification.styled'

export default function Notification({message}){
    return (
        <NotificationMessage>{message}</NotificationMessage>
    )
}
Notification.protoTypes = {
    message: PropTypes.string.isRequired,
}