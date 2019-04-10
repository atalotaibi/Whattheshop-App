import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//List
import CartButton from "../CartButton";

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("product").name,
      headerRight: <CartButton />
    };
  };

  state = {
    product: {}
  };

  handlePress = () => {
    this.setState({
      product: this.props.navigation.getParam("product")
    });
    this.props.addItemToCart(this.state);
  };

  render() {
    // const { product, loading } = this.props.productReducer;
    // if (loading) return <Content />;
    const product = this.props.navigation.getParam("product");
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {product.name + "\n"}
                <Text note>{product.description}</Text>
              </Text>
            </Left>
            <Body />
            {/* <Right>
              <Thumbnail bordered source={{ uri: product.img }} />
            </Right> */}
          </ListItem>

          <Button full danger onPress={this.handlePress}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(actionCreators.addToCart(product))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductDetail);
