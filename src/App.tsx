import React,{useState,useEffect} from 'react';
import axios from "axios"
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { Row,Col } from 'reactstrap';
import CharacterCard from './Components/CharacterCard';
import { setData } from './redux/ActionCreators';
function App(props:any) {
  const [characters,setCharacters]=useState([])
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(response =>{
      setCharacters(response?.data?.results)
      props.setCharactersData(response?.data?.results)
    })
    .catch(error =>{
      console.log("error",error)
    })
  },[])
  return (
    <div>
      <Row style={{display: 'flex',justifyContent: 'center'}}>
        {characters.map(cardData=>(
          <Col
          style={{
            minWidth: '339px',
            maxWidth: '340px',
          }}
          xxs="11"
          xs="7"
          sm="6"
          md="5"
          lg="3"
          xl="3"
          xxl="3" 
          >
            <CharacterCard data={cardData} />
         </Col>
        ))}
      </Row>
    </div>
  );
}
const mapStateToProps = (state:any) => {
  console.log("state", state);
  
  return { state };
};
const mapDispatchtoProps = (dispatch:any) => {
  return {
    setCharactersData: (data:any) => dispatch(setData(data)),
    
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(App);
