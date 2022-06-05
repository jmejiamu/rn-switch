import { StyleSheet } from "react-native";

import Colors from "../../constant/colors";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontFamily: "oswaldBold",
  },
});
