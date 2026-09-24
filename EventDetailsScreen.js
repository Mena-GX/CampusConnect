import { StyleSheet, Text, View} from 'react-native';

export default function EventDetailsScreen({ route }){

    const event = route.params.event;

    return(
        <View>
            <Text>
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

});