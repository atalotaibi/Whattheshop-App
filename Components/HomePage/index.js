import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Actions
// import { getCoffeeShops } from "../../store/actions/coffeeActions";
import AppContainer from "../../Navigation";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCategories(), this.props.getProducts();
  }
  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(actionCreators.getCategories()),
  getProducts: () => dispatch(actionCreators.getCategories())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
