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
import ProductList from "../ProductList/list";
import CartButton from "../CartButton";
import ProductList from "../ProductList/index";

class ProductDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("coffeeShop").name,
      headerRight: <CartButton />
    };
  };

  handlePress = () => {
    const newItem = {
      ...this.state,
      quantity: 1
    };
    this.props.addItemToCart(newItem);
  };

  render() {
    const { product, loading } = this.props.productReducer;
    if (loading) return <Content />;
    const coffeeshop = this.props.navigation.getParam("coffeeShop");
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>

          <Button full danger onPress={this.handlePress}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  productReducer: state.productReducer.product
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(actionCreators.addItemToCart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
