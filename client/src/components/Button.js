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
box-shadow:2px 2px 4px #7A7A7A;
color: ${props => props.theme.color.white};
padding:1rem;
text-transform: uppercase;

&:hover{
    background-color: ${props => props.theme.color.hover};
    transition: ease .3s;

}
`

const Button = (props) => {

    return(
        <div width='fit-content' height='fit-content'>
            <StyledButton onClick={props.onClick}>{props.innerText}</StyledButton>
        </div>
    )
}

export default Button