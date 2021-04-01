import styled from 'styled-components'


export const FormRouteContainer = styled.div`
width:100%;
height:100vh;
background: ${props=> props.theme.color.background};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content:center;

& .logo{
  position:absolute;
  z-index:0;
  left:0;
  width:80%;
  height:auto;
  bottom:0;
  mix-blend-mode: multiply;
  opacity:.2;

  
};

  & p{
    color: ${props=>props.theme.color.hover};
    margin-top:4rem;
    font-weight: 400;
    font-size:1rem;
    text-align: center;
    position:relative;
  z-index:2;

    & span{
      cursor: pointer;
    }

  }

  & h1{
    font-family: ${props=>props.theme.font.display};
    font-weight:400;
    font-size: 3rem;
    color: ${props=>props.theme.color.hover};
  };

& .formContainer{
  position:relative;
  z-index:2;
  padding:2rem;
  box-shadow: ${props=>props.theme.shadow};
  background:white;
  width: 25%;
  

  & form{
    width:80%;
    margin:auto;
    margin-top:1rem;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .errors{
      color:crimson;
      font-size: .9rem;
    }
    
  };


  & label{
    font-family: ${props=>props.theme.font.display};
    font-weight:400;
    font-size:1.4rem;
    color: ${props=>props.theme.color.grayDark};
    width:100%;
    
  };

  & input{
    font-family: ${props=>props.theme.font.body};
    background: ${props=>props.theme.color.grayLight};
    padding: 1rem;
    border:none;
    width:100%;
    outline:none;
    
  }

  & button{
    position:relative;
    width: 100%;
    bottom: -3rem;
  }
}


`
