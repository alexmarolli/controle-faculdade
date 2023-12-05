import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens /Home';
//import './nativewind-output';

export default function App() {
  return (
    <>
      <Home/>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    Text: 10,
    backgroundColor: '#24324C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
