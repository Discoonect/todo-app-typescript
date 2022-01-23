import React, { useState, FC } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Header } from "../../component";

export type Props = {};

const MainScreen: FC<Props> = () => {
  const onPressHeader = (index: number): void => console.log(index);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header onSelectItem={onPressHeader} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontSize: 38,
    fontWeight: "600",
  },
});

export default MainScreen;
