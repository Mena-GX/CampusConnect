import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';

const campusEvents = [
  {
    id: '1',
    name: 'Salsa Class',
    category: 'Art',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
  },

  {
    id: '2',
    name: 'Coding Club Meeting',
    category: 'STEM',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
  },

  {
    id: '3',
    name: 'Student Council Meeting',
    category: 'Leadership',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
  },

  {
    id: '4',
    name: 'Soccer Game',
    category: 'Sports',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
  },

  {
    id: '5',
    name: 'Paint and Sip',
    category: 'Art',
    date: '',
    time: '',
    location: '',
    description: '',
    organizer: '',
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusConnect</Text>

      <TextInput 
      style={styles.searchBar}
      placeholder='Search events..'
      ></TextInput>

      <View style={styles.filterContainer}>
        <Pressable>
          <Text>All</Text>
        </Pressable>

        <Pressable>
          <Text>Art</Text>
        </Pressable>

        <Pressable>
          <Text>STEM</Text>
        </Pressable>

        <Pressable>
          <Text>Sports</Text>
        </Pressable>

        <Pressable>
          <Text>Leadership</Text>
        </Pressable>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  searchBar: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
  },

  filterContainer: {
    flexDirection: 'row',
  },
});
