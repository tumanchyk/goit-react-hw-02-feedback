import PropTypes from 'prop-types';
import { Title } from "./Title.styled"


export default function Section({title, children}){
    return(
        <>
        <Title>{title}</Title>
        {children}
        </>

    )
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
}