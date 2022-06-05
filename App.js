// import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { Header } from "./src/components/index";
import usePayment from "./src/hook/usePayment";
import BillForm from "./src/screens/pay-bill-form";

const App = () => {
  const { doPayment, setDoPayment } = usePayment();
  let [loaded] = useFonts({
    oswaldBold: require("./assets/fonts/Oswald-Bold.ttf"),
    oswaldExtraLight: require("./assets/fonts/Oswald-ExtraLight.ttf"),
    oswaldLight: require("./assets/fonts/Oswald-Light.ttf"),
    oswaldMedium: require("./assets/fonts/Oswald-Medium.ttf"),
    oswaldRegular: require("./assets/fonts/Oswald-Regular.ttf"),
    oswaldSemiBold: require("./assets/fonts/Oswald-SemiBold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  let bill = <BillForm />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Phone Bill"} />
      {bill}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});

export default App;
