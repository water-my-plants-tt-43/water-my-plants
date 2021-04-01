import React from 'react'
import {useHistory} from 'react-router-dom'

const PlantThumb = (props) => {

    const{push} = useHistory()

    const {plant} = props

    return(
        <div key ={plant.user_plants_id} onClick={() => push(`/plant/${plant.user_plants_id}`)}>

            <img src='' alt={`${plant.nickname}(${plant.species}) photo`}/>
            <div >Nickname: {plant.nickname}</div>
            <div >Species: {plant.species}</div>
            
            

    
        </div>
    )
}

export default PlantThumb