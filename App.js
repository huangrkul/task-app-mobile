import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from "react-native-paper";
import { StateProvider } from './src/js/store.js';
import MainTaskBoard from './src/screens/MainTaskBoard';
import theme from './src/customProperties/Themes';

const styles = StyleSheet.create({
  mainView: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'grey',
      width: '100%',
      padding: '12px'
  }
})

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
}

export default App;