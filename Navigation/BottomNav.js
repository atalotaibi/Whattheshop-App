import { createBottomTabNavigator } from "react-navigation";
import React from "react";
import { Icon } from "native-base";
import AuthStack from "./AuthStack";
import ProductStack from "./ProductStack";
import CategoryStack from "./CategoryStack";
import CartStack from "./CartStack";

const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Products: ProductStack,
    Categories: CategoryStack,
    Cart: CartStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "Categories":
            iconName = "caretright";
            iconType = "AntDesign";
            break;
          case "Products":
            iconName = "car";
            iconType = "AntDesign";
          case "Cart":
            iconName = "cart";
            iconType = "MaterialCommunityIcons";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomNav;
