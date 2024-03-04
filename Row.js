import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Row = ({ name, phone }) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{phone}</Text>
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    margin: 20,
    padding: 10,
    width: "80%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "cyan",
    alignItems: "center",
  },
});
