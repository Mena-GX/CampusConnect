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

                <View style={styles.categories}>
                    <Text style={styles.category}>
                        {event.category}
                    </Text>
                </View>

                <View style={styles.thinnerLine}></View>

                <Text>
                    ⏱️ {event.date} at {event.time}
                </Text>

                <Text>
                    📍 {event.location}
                </Text>
            </View>
            
            <View style={styles.minorContainer}>
                <Text style={styles.minorTitle}>Registration</Text>

                <View style={styles.line}></View>

                <Pressable style={styles.registerBtn}>
                    <Text>Register</Text>
                </Pressable>
            </View>

            <View style={styles.minorContainer}>
                <Text style={styles.minorTitle}>Details</Text>
                <View style={styles.line}></View>
                <Text>{event.description}</Text>
            </View>

            <View style={styles.minorContainer}>
                <Text style={styles.minorTitle}>Hosted By</Text>
                <View style={styles.line}></View>
                <Text>{event.organizer}</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        marginTop: 25,
        backgroundColor: '#EEEEEEE'
    },
    
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },

    minorContainer: {
        padding: 15,
        margin: 5,
        backgroundColor: 'white',
    },

    minorTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },

    line: {
        height: 2,
        backgroundColor: 'grey',
        width: '100%',
    },

    registerBtn: {
        backgroundColor: 'grey',
        borderRadius: 10,
        marginVertical: 15,
        width: '100%',
        height: 35,
        alignItems: 'center',
        justifyContent: "center",
    },

    thinnerLine: {
        height: 1,
        backgroundColor: 'grey',
        width: '100%',
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
});