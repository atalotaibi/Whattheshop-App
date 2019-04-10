import { createStackNavigator } from "react-navigation";

import Cart from "../Components/CoffeeCart";
import List from "../Components/ProductList";
import Detail from "../Components/CoffeeDetail";
import Login from "../Components/Login";
import Home from "../Components/HomePage";

const CoffeeStack = createStackNavigator(
  {
    ProductList: List,
    CoffeeDetail: Detail
  },
  {
    initialRouteName: "ProductList",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default CoffeeStack;
