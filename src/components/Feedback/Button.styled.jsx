import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
margin: 0 auto;
width: 250px;
justify-content: space-between;
`
export const Button = styled.button`
border: none;
padding: 6px 12px;
font-size: 18px;
background-color: lightblue;
color: #fff;
border-radius: 6px;
cursor: pointer;
box-shadow: none;
text-transform: capitalize;
transition: box-shadow 0.3s ease-in-out;
&:hover{
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 6px -8px;}`