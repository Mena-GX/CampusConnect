import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import { useState } from 'react';

const campusEvents = [
  {
    id: '1',
    name: 'Salsa Class',
    category: 'Art',
    date: '09/30/26', //month, day, year
    time: '6pm',
    location: '',
    description: 'Come learn how to dance at this Salsa dancing class! No experience required',
    organizer: 'Dance Club',
  },

  {
    id: '2',
    name: 'Coding Club Meeting',
    category: 'STEM',
    date: '10/11/26',
    time: '5pm',
    location: '',
    description: '',
    organizer: 'Coding Club',
  },

  {
    id: '3',
    name: 'Student Council Meeting',
    category: 'Leadership',
    date: '09/25/26',
    time: '7pm',
    location: '',
    description: '',
    organizer: 'Student Council',
  },

  {
    id: '4',
    name: 'Soccer Game',
    category: 'Sports',
    date: '10/11/26',
    time: '2pm',
    location: '',
    description: '',
    organizer: 'Intramural Sports',
  },

  {
    id: '5',
    name: 'Paint and Sip',
    category: 'Art',
    date: '10/15/26',
    time: '7pm',
    location: '',
    description: '',
    organizer: 'Student Services',
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
        <Pressable style={styles.filterButton}>
          <Text>All</Text>
        </Pressable>

        <Pressable style={styles.filterButton}>
          <Text>Art</Text>
        </Pressable>

        <Pressable style={styles.filterButton}>
          <Text>STEM</Text>
        </Pressable>

        <Pressable style={styles.filterButton}>
          <Text>Sports</Text>
        </Pressable>

        <Pressable style={styles.filterButton}>
          <Text>Leadership</Text>
        </Pressable>
      </View>


      <FlatList
      data={campusEvents}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text>
            {item.name}
          </Text>

          <Text>
            {item.organizer}
          </Text>

          <Text>
            {item.category}
          </Text>

          <Text>
            {item.description}
          </Text>

          <Text>
            {item.date}
          </Text>

          <Text>
            {item.time}
          </Text>

          <Text>
            {item.location}
          </Text>

          
        </View>
      )}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  searchBar: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    padding: 15,
    marginBottom: 15,
  },

  filterContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },

  filterButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 5,
  },

});
