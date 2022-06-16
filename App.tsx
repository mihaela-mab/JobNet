import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigator } from './src/components/BottomTabNavigator';
import { Provider } from 'react-redux';
import { Store } from './src/state/store';

export default function App() {
    return (
      <Provider store={Store} >
          <NavigationContainer>
              <BottomTabNavigator/>
          </NavigationContainer>
      </Provider>
    );
}
