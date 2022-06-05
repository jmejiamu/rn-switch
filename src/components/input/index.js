import { TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";

const Input = (props, style) => {
  return <TextInput {...props} style={[styles.input, { ...style }]} />;
};

export default Input;
