import React, { FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  onSelectItem: Function;
};

const Header: FC<Props> = ({ onSelectItem }) => {
  const onPressWork = (): number => onSelectItem(0);
  const onPressTravel = (): number => onSelectItem(1);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressWork}>
        <Text style={styles.btnText}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressTravel}>
        <Text style={styles.btnText}>Travel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Header;
