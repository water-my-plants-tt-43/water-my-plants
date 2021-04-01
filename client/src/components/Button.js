import React from 'react'
import styled from 'styled-components'

//const{font, color} = useContext(ThemeContext)


const StyledButton = styled.button`

background-color : ${props => props.theme.color.teal};
font-family: ${props => props.theme.font.display};
font-size:1.5rem;
font-weight: 400;
outline:none;
border:none;
cursor:pointer;
box-shadow:${props=>props.theme.shadow};
color: ${props => props.theme.color.white};
padding:.5rem 2.5rem;
transform-origin:center center;
text-transform: uppercase;

&:hover{
    background-color: ${props => props.theme.color.hover};
    transition: ease .3s;

}
`

const Button = (props) => {

    return(
        <div width='fit-content' height='fit-content'>
            <StyledButton onClick={props.onClick} type={props.type}> {props.innerText} </StyledButton>
        </div>
    )
}

export default Button