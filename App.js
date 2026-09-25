import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { useState} from 'react'

import HomeScreen from './HomeScreen';
import EventDetailsScreen from './EventDetailsScreen';
import CreateEventScreen from './CreateEventScreen';

const Stack = createNativeStackNavigator();

const campusEvents = [
  {
    id: '1',
    name: 'Salsa Class',
    category: 'Art',
    date: '09/30/26', //month, day, year
    time: '6pm',
    location: 'Squires Ballroom',
    description: 'Come learn how to dance at this Salsa dancing class! No experience required',
    organizer: 'Dance Club',
    image: require('./salsa_dancing_class.webp'),
  },

  {
    id: '2',
    name: 'Coding Club Meeting',
    category: 'STEM',
    date: '10/11/26',
    time: '5pm',
    location: 'McBryde 100',
    description: 'GBM for coding club. Snacks will be provided.',
    organizer: 'Coding Club',
    image: require('./salsa_dancing_class.webp'),
  },

  {
    id: '3',
    name: 'Student Council Meeting',
    category: 'Leadership',
    date: '09/25/26',
    time: '7pm',
    location: 'Burruss Hall',
    description: 'Student Council Meeting to go over action items and vote on decisions',
    organizer: 'Student Council',
    image: require('./salsa_dancing_class.webp'),
  },

  {
    id: '4',
    name: 'Soccer Game',
    category: 'Sports',
    date: '10/11/26',
    time: '2pm',
    location: 'Soccer Field',
    description: 'Come join us for a fun game of soccer!',
    organizer: 'Intramural Sports',
    image: require('./salsa_dancing_class.webp'),
  },

  {
    id: '5',
    name: 'Paint and Sip',
    category: 'Art',
    date: '10/15/26',
    time: '7pm',
    location: 'CID',
    description: 'Come join us for an evening of paint and sip! There will be choices of items to paint on including bags, pots, and canvases and a selection of mocktails to drink!',
    organizer: 'Student Services',
    image: require('./salsa_dancing_class.webp'),
  },
];

export default function App() {
  const [events, setEvents] = useState(campusEvents);

 return(
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen
        name="Home"
        children={(props) => (
          <HomeScreen {...props} events={events} />
        )}
      />

      <Stack.Screen
        name='EventDetails'
        component={EventDetailsScreen}
      />

      <Stack.Screen
        name="CreateEvent"
        children={(props) => (
          <CreateEventScreen {...props} setEvents={setEvents} />
        )}
      />
    </Stack.Navigator>
  </NavigationContainer>
 );
}

// const styles = StyleSheet.create({
  
// });
