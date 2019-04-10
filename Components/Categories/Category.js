import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class Category extends Component {
  render() {
    const { category } = this.props;
    return (
      <ImageBackground
        source={{ uri: category.image }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() =>
            this.props.navigation.navigate("CategoryDetail", {
              category: category
            })
          }
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                //   bordered
                //   source={{ uri: category.img }}
                //   style={styles.thumbnail}
                />
                <Text style={styles.text}>{category.name}</Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default withNavigation(Category);
