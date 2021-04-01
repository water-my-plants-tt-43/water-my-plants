import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const ThumbWrapper= styled.div`

font-family: ${props=>props.theme.font.body};
color: ${props=> props.theme.color.teal};

& div{
    margin-bottom:.5rem;
};
& h4{
   
    font-weight: 600;
    font-size:1rem;
    margin:0;
};
& p{
    
    font-weight: 400;
    font-size:.8rem;
    font-style:italic;
    margin:0;
}
`

const PlantThumb = (props) => {

    const{push} = useHistory()

    const {plant} = props
    console.log(plant)

    return(
        <ThumbWrapper key ={plant.user_plants_id} onClick={() => push(`/plant/${plant.user_plants_id}`)}>

            <div><img src='' alt={`${plant.nickname}(${plant.species}) photo`}/></div>
            <h4>{plant.nickname}</h4>
            <p>({plant.species})</p>
            
            

    
        </ThumbWrapper>
    )
}

export default PlantThumb