import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import {useHistory} from 'react-router-dom'

const Wrapper = styled.div`
width:100%;
height:80vh;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;

& h2{
    font-family: ${props=>props.theme.font.display};
    font-weight: 400;
    color: ${props=>props.theme.color.grayDark};
    font-size:3rem;
}`

const NoPlants = () => {

    const {push} = useHistory()

    return(
        <Wrapper>
            <h2>Looks like you don't have any plants yet...</h2>
            <Button innerText={'Add Plant'} onClick={()=>{push('/plants/new')}}/>
        </Wrapper>
    )
}

export default NoPlants