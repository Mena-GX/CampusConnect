import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import EventDetailsScreen from './EventDetailsScreen';
import CreateEventScreen from './CreateEventScreen';

const Stack = createNativeStackNavigator();

export default function App() {
 return(
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        name='EventDetails'
        component={EventDetailsScreen}
      />

      <Stack.Screen
        name="CreateEvent"
        component={CreateEventScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

// const styles = StyleSheet.create({
  
// });
