import React from 'react';
import { StyleSheet, Text, View,WebViewnp } from 'react-native';
import {WebView} from "react-native-webview";
export default function App() {
  return (
    <WebView 
     source={{uri:"http://cittakshashila.org/index.php"}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
