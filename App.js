import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { StateProvider } from "./src/js/store.js";
import MainTaskBoard from "./src/screens/MainTaskBoard";
import theme from "./src/customProperties/Themes";

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
    backgroundColor: "#ddd",
    width: "100%",
    height: "100%",
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});

const App = () => {
  return (
    <StateProvider>
      <PaperProvider theme={theme}>
        <View style={styles.mainView}>
          <MainTaskBoard />
        </View>
        <StatusBar style="dark" />
      </PaperProvider>
    </StateProvider>
  );
};

export default App;
