import { NavigationContainer } from '@react-navigation/native';


import { Navigation } from './src/components/TabNavigator';
import { Login } from './src/screens/Login';


export default function App() {
  return (
     <NavigationContainer>
         <Navigation/>
     </NavigationContainer>
    //<Login/>
  );
}