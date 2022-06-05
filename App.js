// import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { Header } from "./src/components/index";
import usePayment from "./src/hook/usePayment";
import Recipe from "./src/screens/bill-recipe";
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
  // const onSubmitYesPayment = () => {
  //   setDoPayment(true);
  // };
  let bill = <BillForm />;

  // if (doPayment) {
  //   bill = <Recipe />;
  // }

  // if (doPayment) {
  //   bill = (
  //     <View>
  //       <Text>Do you want proceed with the payment?</Text>
  //       <View style={styles.btnContainer}>
  //         <Button title="Yes" onPress={() => onSubmitYesPayment()} />
  //         <Button title="No" onPress={handleCleanInput} />
  //       </View>
  //     </View>
  //   );
  // }

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
