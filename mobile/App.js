import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/components/routes';

import { Navigation } from './src/components/TabNavigator';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <NavigationContainer>
          <Navigation/>
      </NavigationContainer>
    </KeyboardAvoidingView>
    
  );
}