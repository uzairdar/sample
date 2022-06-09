import React,{useState,useEffect} from 'react'
import {
    CardText,
    CardSubtitle,
    Card,
    CardBody,
    Button,
    CardImg,
    CardTitle,
  } from 'reactstrap';
//   import Heart from "react-animated-heart";

function CharacterCard(props:any) {
    const [data,setData]=useState(props?.data)
    const [favourite, setFavourite] = useState(true);
    const [color,setColor] = useState("")
    useEffect(() => {
    // console.log(props)
    if(data.status=="Dead"){
        setColor("dotD")
    }
    else if (data.status=="Alive"){
        setColor("dotA")
    }
    else{
        setColor("dotU")
    }
  },)
  useEffect(() => {
    if(props.favArray.find((x:any) => x.id == data.id)){
    setFavourite(false)    
    }
  },[])
    return (
    <Card className="mb-3 mt-3 ml-3 mr-3" 
    >
        <CardImg src={data?.image} alt="Card Image"/>
        <CardBody>
            <CardTitle ><h5 className="hovered">{data.name}</h5></CardTitle>
            <CardSubtitle className="mb-2"><span className={color}></span> {data.status}</CardSubtitle>
            <CardText> <p className="text-muted">Last know location</p></CardText>
            <CardText className="hovered">{data?.location.name}</CardText>
            <CardText className="hovered"> {data?.gender} </CardText>
            <div style={{display: 'flex', justifyContent: "flex-end"}}>
            <Button color="danger" onClick={() => {
                setFavourite(!favourite)
                if(favourite){
                    props.setFavArray((prevState:any) => [...prevState, data]);
                }
                else{
                   props.setFavArray(props.favArray.filter((single:any) => single.id !== data.id)); 
                }
            }}>{favourite ?"Favourite":"Unfavourite"}</Button>
            </div>
        </CardBody>
    </Card>
  )
}

export default CharacterCard