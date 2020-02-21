import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import styled from 'styled-components'

  const CustomCard = styled.div`
  background-color: pink;
  border-radius: 45%;
  width: 50%;
  margin: 0 auto;
  border: 2px solid silver;
  `

const CharCard = (props) => {
return (
    <CustomCard>
    
        
            <CardTitle>{props.name}</CardTitle>
            <CardSubtitle>{props.gender}</CardSubtitle>
        
   
   </CustomCard>
)
}

export default CharCard;

// {props.name}
// {props.gender}