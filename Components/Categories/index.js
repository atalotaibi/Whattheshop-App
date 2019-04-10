import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";

// Store

// Component
import Category from "./Category";
import CartButton from "../CartButton";

class CategoryList extends Component {
  static navigationOptions = {
    title: "category List",
    headerRight: <CartButton />
  };

  render() {
    const categories = this.props.categoriesReducer;
    let categoryList;

    // if (loading) {
    //   return <Spinner />;
    // }
    console.log(categories);
    categoryList = categories.map(category => (
      <Category category={category} key={category.id} />
    ));

    return (
      <Content>
        <List>{categoryList}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  categoriesReducer: state.categoriesReducer.categories
});

export default connect(mapStateToProps)(CategoryList);
