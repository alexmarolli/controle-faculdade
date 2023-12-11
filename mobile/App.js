import { NavigationContainer } from '@react-navigation/native';


import { Navigation } from './src/components/TabNavigator';


export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>
  );
}