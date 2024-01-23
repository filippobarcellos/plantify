import 'react-native-unistyles';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {  createStyleSheet, useStyles } from 'react-native-unistyles'

export default function App() {
  const { styles } = useStyles(stylesheet)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const stylesheet = createStyleSheet(() => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        color: 'red',
    }
}))
