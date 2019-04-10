import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store

// Component
import Product from "./Product";
import CartButton from "../CartButton";
// import LogoutButton from "../LogoutButton";

class ProductList extends Component {
  static navigationOptions = {
    title: "product List",
    headerRight: <CartButton />
  };

  render() {
    const products = this.props.productReducer;
    let productList;

    // if (loading) {
    //   return <Spinner />;
    // }
    productList = products.map(product => (
      <Product product={product} key={product.id} />
    ));

    return (
      <Content>
        <List>{productList}</List>
        {/* <LogoutButton /> */}
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  productReducer: state.productReducer.products
});

export default connect(mapStateToProps)(ProductList);
