import { StyleSheet, Text, View, Image, Pressable} from 'react-native';

export default function EventDetailsScreen({ route }){

    const event = route.params.event;

    return(
        <View style={styles.container}>
            <View style={styles.minorContainer}>
                <Image source={event.image} style={{width:'100%', height: 200}}/>

                <Text style={styles.title}>
                    {event.name}
                </Text>

                <Text>
                    Organized by: {event.organizer}
                </Text>

                <Text>
                    {event.category}
                </Text>

                <Text>
                    {event.date} at {event.time}
                </Text>

                <Text>
                    {event.location}
                </Text>
            </View>
            
            <View style={styles.minorContainer}>
                <Text style={styles.minorTitle}>Registration</Text>

                <Pressable>
                    <Text>Register</Text>
                </Pressable>
            </View>

            <View style={styles.minorContainer}>
                <Text style={styles.minorTitle}>Details</Text>
                <Text>{event.description}</Text>
            </View>

            <View style={styles.minorContainer}>
                <Text style={styles.minorTitle}>Hosted By</Text>
                <Text>{event.organizer}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#EEEEEEE'
    },
    
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },

    minorContainer: {
        padding: 15,
        margin: 5,
        backgroundColor: 'white',
    },

    minorTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    }
});