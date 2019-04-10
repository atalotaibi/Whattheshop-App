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
    let categoryDetail;

    // if (loading) {
    //   return <Spinner />;
    // }

    categoryDetail = category.products.map(product => (
      <Product product={product} key={product.id} />
    ));

    return (
      <Content>
        <List>{categoryDetail}</List>
      </Content>
    );
  }
}

export default CategoryDetail;
