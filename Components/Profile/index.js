import React, { Component } from "react";
import { Text, View } from "native-base";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    if (!this.props.user) {
      this.props.navigation.replace("Login");
    }
    return (
      <View>
        <Text>PROFILE PAGE</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps)(Profile);
