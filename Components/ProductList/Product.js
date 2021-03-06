import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { withNavigation } from "react-navigation";
// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <ImageBackground
        source={{ uri: product.background }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() =>
            this.props.navigation.navigate("ProductDetail", {
              product: product
            })
          }
        >
          <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  bordered
                  source={{ uri: product.img }}
                  style={styles.thumbnail}
                />
                <Text style={styles.text}>{product.name}</Text>
              </Left>
            </CardItem>
          </Card>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default withNavigation(Product);
