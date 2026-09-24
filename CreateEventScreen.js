import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

export default function CreateEventScreen(){
    return (
        <View>
            <Text style={styles.title}>Create Event</Text>

            <Text style={styles.label}>Event Name</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Event Name...'
            />

            <Text style={styles.label}>Category</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Category...'
            />

            <Text style={styles.label}>Date</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Date...'
            />

            <Text style={styles.label}>Time</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Time...'
            />

            <Text style={styles.label}>Location</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Location...'
            />

            <Text style={styles.label}>Organizer</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Organizer...'
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.formInput}
                placeholder='Description...'
            />

            <Pressable>
                <Text>
                    Create Event
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        
    },

    label: {

    },

    formInput: {
        height: 50,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        padding: 15,
        marginBottom: 15,
    },
});