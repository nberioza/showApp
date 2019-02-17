import React from 'react';
import { Image } from 'react-native';
import {CardItem,Body,Text,H3,Grid,Row} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';




const ShowCardItem = (props)=>{
 return (<CardItem bordered button onPress={props.onPress}>
       <Body>
           <Image source={{uri: props.imgUri}} style={{height: 200, width: 200, flex: 1}}/>
        <H3>{props.title}</H3>
      <Grid><Row>{starCount(props.rating)}<H3>{props.rating}</H3></Row></Grid>  
        </Body>
     </CardItem>
    )
}


const starCount=(num)=>{
const arr = [];
let keynum=1;
    while(num>=1){
      num-- ; 
   arr.push(<Icon  name="star" size={20} color="#eef442" backgroundColor ="#eef442" key={keynum}/>);
   keynum++ ;
}
if(num!==0){
arr.push(<Icon  name="star-half-empty" size={20} color="#eef442" backgroundColor ="#eef442" key={keynum}/>)
keynum++ ;
}

return arr ;
} 
export default ShowCardItem