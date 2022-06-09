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
function FavouriteList(props:any) {
    const [data,setData]=useState(props?.List)
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
  return (
    <Card className="mb-3 mt-3 ml-3 mr-3 d-flex flex-row" 
    >
        <CardImg src={data?.image} alt="Card Image" style={{width:"200px",height:"240px"}}/>
        <CardBody>
            <CardTitle ><h5 className="hovered">{data.name}</h5></CardTitle>
            <CardSubtitle className="mb-2"><span className={color}></span> {data.status}</CardSubtitle>
            <CardText> <p className="text-muted">Last know location</p></CardText>
            <CardText className="hovered">{data?.location.name}</CardText>
            <CardText className="hovered"> {data?.gender} </CardText>
        </CardBody>
    </Card>
  )
}

export default FavouriteList