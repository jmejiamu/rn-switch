import { StyleSheet } from "react-native";
import Colors from "../../constant/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
});
