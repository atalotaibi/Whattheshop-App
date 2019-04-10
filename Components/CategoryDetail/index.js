import React, { Component } from "react";
// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store

// Component
import Product from "../ProductList/Product";
import CartButton from "../CartButton";

class CategoryDetail extends Component {
  static navigationOptions = {
    title: "Products",
    headerRight: <CartButton />
  };

  render() {
    const category = this.props.navigation.getParam("category");
    let category;

    // if (loading) {
    //   return <Spinner />;
    // }
    category = category.products.map(product => (
      <Product product={product} key={product.id} />
    ));

    return (
      <Content>
        <List>{category}</List>
      </Content>
    );
  }
}

export default CategoryDetail;
