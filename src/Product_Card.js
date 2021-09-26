import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Product_Card(props) {
    const title = props.products.title;
    const discription = props.products.discription;
    const image = props.products.img;
    const price = props.products.price;
    console.log(props)

    return(
    <div style={{width : '400px'}}   >
    <Card style={{flexdirection: 'column',alignItems: 'center',
            justifyContent: 'center',}} >
        <CardImg  style={{width: '300px',height:'300px', padding:'10px' }} width="10" src={image} alt="Card image cap" />
        <CardBody style={{flexdirection: 'column'}} >
          <CardTitle style={{width: '100%'}} tag="h5">{title}</CardTitle>
          <CardText  style={{width: '100%'}}>{discription}</CardText>
          <CardText > ราคา : {price} บาท</CardText>
          
        
        </CardBody>
      </Card>
    </div>
    )
}
export default Product_Card;