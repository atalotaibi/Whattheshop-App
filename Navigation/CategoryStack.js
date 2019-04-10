import { createStackNavigator, createAppContainer } from "react-navigation";

import Categories from "../Components/Categories";
import CategoryDetail from "../Components/CategoryDetail";
import ProductDetail from "../Components/ProductDetail";

const CategoryStack = createStackNavigator(
  {
    Categories: Categories,
    CategoryDetail: CategoryDetail,
    ProductDetail: ProductDetail
  },
  {
    initialRouteName: "Categories",
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

export default CategoryStack;
