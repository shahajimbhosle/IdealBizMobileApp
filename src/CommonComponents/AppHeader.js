import React from "react";
import { StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import MenuButton from "./MenuButton";

const AppHeaderStyles = StyleSheet.create({});

const AppHeader = props => {
  const centerComponent = {
    text: "IdealBiz",
    style: {
      color: "#1400c6",
      fontSize: "20px",
      fontWeight: "bold"
    }
  };

  const containerStyle = {
    backgroundColor: "#ffff"
  };

  return (
    <Header
      leftComponent={<MenuButton />}
      centerComponent={centerComponent}
      // containerStyle={containerStyle}
    />
  );
};

export default AppHeader;
