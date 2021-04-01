import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components'
import Button from './Button'
import { useHistory } from "react-router-dom";
import PlantThumb from './PlantThumb'
import NoPlants from './NoPlants'

const GridContainer = styled.div`
display: grid;
width: 80%;
margin:auto;
grid-template-columns: repeat(4,1fr);
gap:.5rem;

& div{cursor:pointer;}`

const Heading= styled.div`
width: 80%;
margin: 4rem auto;

& button{
  font-size: 1rem;
  margin:0;
}

& h2{
font-family: ${props=> props.theme.font.display};
color: ${props=>props.theme.color.grayDark};
font-weight: 400;
font-size: 3rem;
margin:.5rem 0;
};



`

const host = "https://water-my-plants-tt43.herokuapp.com";

const initialState = {
  species: "",
  nickname: "",
  water_frequency: "",
};

const PlantsList = (props) => {
  // const { userId } = props;
  // console.log(userId);
  const { push } = useHistory();
  const [plants, setPlants] = useState([]);
  const [disabled, setDisabled] = useState([plants.length][false]); // 2d array for each edit button for every plant that exists
  const [formvalues, setFormvalues] = useState(initialState);

  useEffect(() => {
    axiosWithAuth(host)
      //   .get(`/api/users/${userId}/plants`)
      .get(`/api/users/${localStorage.getItem("user")}/plants/`)
      .then((res) => {
        console.log(res.data);
        setPlants(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const isEditing = (index) => {
    const boolean = disabled[index] === true ? false : true;
    setDisabled([index][boolean]);
  };

  const handleChange = (event) => {
    setFormvalues({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    /* todo */
  };


  return (
    <div className='plants-container'>
    
      {plants.length === 0 && <NoPlants/>}
      {plants.length !== 0 && <Heading><h2>My Plants</h2> <Button innerText={'Add Plant'} onClick={()=>{push('/plants/new')}}/></Heading>}
    
      <GridContainer>
      {plants.map( plant => <PlantThumb plant={plant}/>)}
      </GridContainer>

      
    </div>
  );
};

export default PlantsList;
