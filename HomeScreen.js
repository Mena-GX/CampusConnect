import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import { useState } from 'react';


export default function HomeScreen({ navigation, events }) {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter((event) => {

    const matchesSearch = event.name.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = 
      filter === 'all' ||
      (filter === 'Art' && event.category === 'Art') ||
      (filter === 'STEM' && event.category === 'STEM') ||
      (filter === 'Sports' && event.category === 'Sports') ||
      (filter === 'Leadership' && event.category === 'Leadership');

      return matchesSearch && matchesFilter;
  });

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {

    if(favorites.includes(id)){
        setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
        setFavorites([...favorites, id]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusConnect</Text>

      <Pressable
        style={styles.createButton}
        onPress={() => navigation.navigate('CreateEvent')}
      >
        <Text style={styles.createButtonText}>
            + Create Event
        </Text>
      </Pressable>

      <TextInput 
      style={styles.searchBar}
      placeholder='Search events..'
      value={search}
      onChangeText={setSearch}
      />

      <View style={styles.filterContainer}>
        <Pressable style={[styles.filterButton,
          filter === 'all' && styles.activeFilter,
        ]}
        onPress={() => setFilter('all')}>
          <Text>All</Text>
        </Pressable>

        <Pressable style={[styles.filterButton,
          filter === 'Art' && styles.activeFilter,
        ]}
        onPress={() => setFilter('Art')}>
          <Text>Art</Text>
        </Pressable>

        <Pressable style={[styles.filterButton,
          filter === 'STEM' && styles.activeFilter,
        ]}
        onPress={() => setFilter('STEM')}>
          <Text>STEM</Text>
        </Pressable>

        <Pressable style={[styles.filterButton,
          filter === 'Sports' && styles.activeFilter,
        ]}
        onPress={() => setFilter('Sports')}>
          <Text>Sports</Text>
        </Pressable>

        <Pressable style={[styles.filterButton,
          filter === 'Leadership' && styles.activeFilter,
        ]}
        onPress={() => setFilter('Leadership')}>
          <Text>Leadership</Text>
        </Pressable>
      </View>


      <FlatList
      data={filteredEvents}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable style={styles.card}
            onPress={() => navigation.navigate('EventDetails', {event: item})}
        >
            <View style={styles.holder}>
                <Text style={styles.cardTitle}>
                        {item.name}
                </Text>

                <Pressable onPress={() => toggleFavorite(item.id)}  style={styles.favorite}>
                    <Text style={{fontSize: 20}}>
                        {favorites.includes(item.id) ? '★' : '☆'}
                    </Text>
                </Pressable>
            </View>
            
            <Text>
                {item.organizer}
            </Text>

            <View style={styles.categories}>
                <Text style={styles.category}>
                    {item.category}
                </Text>
            </View>

            <Text style={styles.description}
            numberOfLines={2}
            ellipsizeMode='tail'>
                {item.description}
            </Text>

            <Text style={styles.location}>
                {item.date} {item.time} {item.location}
            </Text>

        </Pressable>
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
    width: '90%',
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

  card: {
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 17,
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  categories: {
    flexDirection: 'row',
  },

  category: {
    backgroundColor: '#EEEEEE',
    padding: 6,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 6,
  },

  activeFilter: {
    borderWidth: 2,
    borderColor: 'black',
  },

  location: {
    color: 'grey',
    marginTop: 5,
    alignSelf: 'center',
  },

  holder: {
    flexDirection: 'row',
    width: '100%',
  },

  favorite: {
    position: 'absolute',
    top: 1,
    right: 1,
  },

  createButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },

  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});
