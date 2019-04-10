import { createStackNavigator, createAppContainer } from "react-navigation";

import ProductList from "../Components/ProductList";
import ProductDetail from "../Components/ProductDetail";

const ProductStack = createStackNavigator(
  {
    ProductList: ProductList,
    ProductDetail: ProductDetail
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

export default ProductStack;
