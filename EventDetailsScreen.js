import { StyleSheet, Text, View} from 'react-native';

export default function EventDetailsScreen({ route }){

    const event = route.params.event;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                {event.name}
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

            <Text>
                Organized by: {event.organizer}
            </Text>

            <Text>
                {event.description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
    },
    
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        alignSelf: 'center',
    },
});