import React from 'react'
import Button from './Button'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100vw;
height: 125px;
overflow-x:hidden;
overflow-y:visible;`


const NavContainer = styled.nav`

background: ${props=>props.theme.color.background};
box-shadow: ${props=>props.theme.shadow};
padding: 0 4rem;
position:relative;
color: ${props=>props.theme.color.teal};
display: flex;
justify-content: space-between;
align-items: center;

& h3{
    font-family: ${props=>props.theme.font.display};
    font-weight: 400;
    font-size:2rem;
    
    }

& p{
    font-family:${props=>props.theme.font.body};
    font-weight:400;
    font-size: 1.5rem;
    & span{
        font-weight: 600;
    }
    };

}`

const ButtonsContainer = styled.div`

display: flex;

justify-content: flex-end;
align-items:center;
position:relative;
z-index:2;
margin: -1rem;
padding-right:3rem;

& button{
    padding:.5;
    margin: 0 .5rem;
    font-size:1rem;
}


`



const Navigation = (props) => {

    const {push} = useHistory()

    const logout = () =>{
        localStorage.removeItem('token')
        push('/')
    }

    return(
        <Wrapper>
            <NavContainer>
                <h3>WaterMyPlants</h3>
                <p>welcome <span>User</span></p>
            </NavContainer>
            <ButtonsContainer>
                    <Button onClick ={()=>{push('/user')}} innerText={'My Profile'}/>
                    <Button onClick={logout} innerText={'Logout'}/>
                </ButtonsContainer>
        </Wrapper>
    )
}

export default Navigation