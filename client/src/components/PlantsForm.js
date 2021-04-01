import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {axiosWithAuth} from "../utils/axiosWithAuth"

const PlantForm = (props) => {
    const {push} = useHistory();

    const [plant, setPlant] = useState({
      species: "",
      nickname: "",
      water_frequency: "",  
    })

    const { plantId } = useParams()
    const userID = localStorage.getItem("user")

    useEffect(()=>{
        axiosWithAuth("https://water-my-plants-tt43.herokuapp.com/")
        .get(`/api/users/${userID}/plants/${plantId}`)
        .then((res)=>{
            console.log(res)
            setPlant({
                ...plant,
                species: res.data[0].species,
                nickname: res.data[0].nickname,
                water_frequency: res.data[0].water_frequency
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    const handleChange = (e) => {
        setPlant({
            ...plant,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axiosWithAuth("https://water-my-plants-tt43.herokuapp.com/")
        .put(`/api/users/${userID}/plants/${plantId}`, plant)
        .then((res)=>{
            push(`/plant/${plantId}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="plant-form-container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>edit Plant</legend>

                    <label>Species:
                        <input 
                            type="text"
                            name="species"
                            value={plant.species}
                            onChange={handleChange}
                        />
                    </label>

                    <label>Nickname:
                        <input 
                            type="text"
                            name="nickname"
                            value={plant.nickname}
                            onChange={handleChange}
                        />
                    </label>

                    <label>Water Frequency:
                        <input 
                            type="text"
                            name="water_frequency"
                            value={plant.water_frequency}
                            onChange={handleChange}
                        />
                    </label>
                    <button>OK</button>
                </fieldset>
            </form>
        </div>
    )
}

export default PlantForm;