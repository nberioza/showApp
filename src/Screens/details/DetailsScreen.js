import React, { Component } from "react";

import { Image } from "react-native";
import {
  Container,
  Content,
  CardItem,
  Body,
  Footer,
  H1,
  H3,
  Grid,
  Row,
  Card,
  Title
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return { headerTitle: navigation.getParam("title") };
  };

  state = {
    info: ""
  };
  componentDidMount() {
    const idNum = this.props.navigation.getParam("id");
    console.log("id Number is", idNum);
    fetch(" http://api.tvmaze.com/shows/" + idNum)
      .then(res => {
        return res.json();
      })
      .then(resData => {
        let description = resData.summary.slice(
         ( resData.summary.indexOf(">")+1),
          resData.summary.lastIndexOf("<")
        );
        let headLine = description.slice(
          (description.indexOf(">")+1),
          description.indexOf("</b>")
        );
        let newDescription = description.slice(description.indexOf("</b>")+4);
        //description=descriprion.replace(/<b'/g,"");

        this.setState({
          imageUri: resData.image.original,
          rating: resData.rating.average,
          description: newDescription,
          headLine: headLine
        });
        console.log(this.state.description);
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.description);
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: this.state.imageUri }}
                  style={{ height: 300, width: 300, flex: 1 }}
                />
                <Grid>
                  <Row>
                    {starCount(this.state.rating)}
                    <H3>{this.state.rating}</H3>
                  </Row>
                  <Row>
                   <H1>{this.state.headLine}</H1></Row>
                </Grid>
 <H3>{this.state.description}</H3>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Footer style={{ bottom: 0, position: "absolute" }}>
          <H1>Netanel Berioza</H1>
        </Footer>
      </Container>
    );
  }
}

const starCount = num => {
  const arr = [];
  let keynum = 1;
  while (num >= 1) {
    num--;
    arr.push(
      <Icon
        name="star"
        size={20}
        color="#eef442"
        backgroundColor="#eef442"
        key={keynum}
      />
    );
    keynum++;
  }
  if (num !== 0) {
    arr.push(
      <Icon
        name="star-half-empty"
        size={20}
        color="#eef442"
        backgroundColor="#eef442"
        key={keynum}
      />
    );
    keynum++;
  }

  return arr;
};
/**<Body>
            <Image source={{uri: this.state.info.image.original}} style={{height: 200, width: 200, flex: 1}}/>
 
              <Grid><Row>{starCount(this.state.info.rating.average)}<H3>{this.state.info.rating.average}</H3></Row></Grid>  
              </Body> */
