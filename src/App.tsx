import React,{useState,useEffect} from 'react';
import axios from "axios"
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import { 
  Row,
  Col,
  Modal,
  ModalHeader,
  Button,
  ModalBody,
  Input,
  ModalFooter, } from 'reactstrap';
import CharacterCard from './Components/CharacterCard';


import { setData } from './redux/ActionCreators';
import FavouriteList from './Components/FavouriteList';
function App(props:any) {
  const [characters,setCharacters]=useState([])
  const [favArray,setFavArray]=useState([])
  const [searchVal,setSearchVal]=useState()
  const [modal, setModal] = useState(false);
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
//   useEffect(() => {
// console.log("favourite",favArray)
//   },[favArray])
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'space-between',width:"90%"}} className="ml-4 mr-3 mt-4 mb-4">
      <Input type="text" name="name" value={searchVal} placeholder="Search a Name" onChange={(e:any)=>{
        setSearchVal(e.target.value);
        console.log(e.target.value)
        setCharacters(props.data.filter((c:any) => {
          if(c.name.toLowerCase().includes(e.target.value.toLowerCase())){
            return c
          }
        }))
      }} style={{width:"40%"}}/>
      <Button onClick={()=>setModal(true)}>Favourites</Button>
      </div>
      <Row style={{display: 'flex',justifyContent: 'center'}}>
        {characters.map(cardData=>(
          <Col
          style={{
            minWidth: '300px',
            maxWidth: '300px',
          }}
          xxs="1"
          xs="1"
          sm="2"
          md="2"
          lg="4"
          xl="4"
          xxl="4" 
          >
            <CharacterCard data={cardData} setFavArray={setFavArray} favArray={favArray} />
         </Col>
        ))}
      </Row>
      <Modal
       isOpen={modal}
       toggle={() => setModal(!modal)}
       style={{height:"40%"}}
    >
      <ModalHeader>
        <h3>Favourites</h3>
      </ModalHeader>
      <ModalBody>
          {favArray.map((single)=>(
            <div style={{display:"flex",flexDirection:"column"}}>
              <FavouriteList List={single} setFavArray={setFavArray} favArray={favArray}/>
            </div>
          ))}
      </ModalBody>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state:any) => {
  console.log("state", state);
  const {data}=state
  return { data };
};
const mapDispatchtoProps = (dispatch:any) => {
  return {
    setCharactersData: (data:any) => dispatch(setData(data)),
    
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(App);
