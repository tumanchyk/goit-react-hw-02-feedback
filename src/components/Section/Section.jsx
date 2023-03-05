import PropTypes from 'prop-types';
import { Title, SectionEl } from "./Title.styled"


export default function Section({title, children}){
    return(
        <SectionEl>
        <Title>{title}</Title>
        {children}
        </SectionEl>

    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}