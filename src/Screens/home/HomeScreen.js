import React, { Component } from "react";
//import {} from 'react-native';
import {
  Container,
  Title,
  Card,
  Content,
  CardItem,
  Header,
  Body,
  Text,
  Button,
  Footer,
  Item,
  H1
} from "native-base";
import {ActivityIndicator } from 'react-native';

import "react-navigation";
import ShowCardItem from "../../Components/ShowCardItem";

export default class HomeScreen extends Component {
  state = { info: [], isLoading: true };

  componentDidMount() {
   
  fetch(" http://api.tvmaze.com/shows")
      .then(res => {
        return res.json();
      })
      .then(resData => {
        this.setState({ info: resData ,isLoading : false});
      });
  }
renderScreen(){
  if(this.state.isLoading){
return < ActivityIndicator  size="large" color="#0000ff"/>
  }



}

initialFetching(){
 const initArr=[];
  for(let i = 0 ;i<15 ; i++){
    fetch(" http://api.tvmaze.com/shows/"+(i+1))
    .then(res => {
      return res.json();
    })
    .then(resData => {
      console.log(resData[0].rating.average);
      initArr.push(resData);
    });
  }
   this.setState({ info:  initArr ,isLoading : false})
}

  render() {
    // const arrtorender =this.renderItems();
    return (
      <Container>
        <Content>
          <Card  dataArray={this.state.info}  renderRow={item => (
              <ShowCardItem
                imgUri={item.image.medium}
                title={item.name}
                rating={item.rating.average}
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    id: item.id,
                    title: item.name
                  })
                }
              />   )}>
            {this.renderScreen()}
            
          
          </Card>
        </Content>
        <Footer style={{ bottom: 0, position: "absolute" }}>
          <H1>Netanel Berioza</H1>
        </Footer>
      </Container>
    );
  }
}

/**imgUrl={{uri:duckUrl}} */
//{item.rating.average}
/** <CardItem >
              <Body><Text>MYTEXT</Text>
              <Button onPress={()=>{this.props.navigation.navigate('Details')}}><Text>Navigate</Text></Button></Body></CardItem> */
/** async componentDidMount() {

     

    fetch(" http://api.tvmaze.com/shows")
      .then(res => {
        return res.json();
      })
      .then(resData => {
        console.log(resData[0].rating.average);
        this.setState({ info: resData ,isLoading : false});
      });
  } */

  /**{this.state.info.map(item => (
              <ShowCardItem
                imgUri={item.image.medium}
                title={item.name}
                rating={item.rating.average}
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate("Details", {
                    id: item.id,
                    title: item.name
                  })
                }
              />   ))}*/