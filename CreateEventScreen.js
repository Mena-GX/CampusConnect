import { StyleSheet, Text, View, TextInput, Pressable, ScrollView} from 'react-native';
import { useState } from 'react';

export default function CreateEventScreen({navigation, setEvents}){
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateEvent = () => {

        if (!name.trim()){
            alert('please enter an event name');
            return;
        }

        if (!category.trim()){
            alert('please enter an event name');
            return;
        }

        if (!date.trim()){
            alert('please enter an event name');
            return;
        }

        if (!time.trim()){
            alert('please enter an event name');
            return;
        }

        if (!location.trim()){
            alert('please enter an event name');
            return;
        }

        if (!organizer.trim()){
            alert('please enter an event name');
            return;
        }

        if (!description.trim()){
            alert('please enter an event name');
            return;
        }

        const newEvent = {
            id: Date.now().toString(),
            name: name,
            category: category,
            date: date,
            time: time,
            location: location,
            description: description,
            organizer: organizer,
        };

        setEvents((currentEvents) => [
            ...currentEvents,
            newEvent,
        ]);

        navigation.goBack();
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Create Event</Text>

                <Text style={styles.label}>Event Name</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Event Name...'
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Category</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Category...'
                    value={category}
                    onChangeText={setCategory}
                />

                <Text style={styles.label}>Date</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Date...'
                    value={Date}
                    onChangeText={setDate}
                />

                <Text style={styles.label}>Time</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Time...'
                    value={time}
                    onChangeText={setTime}
                />

                <Text style={styles.label}>Location</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Location...'
                    value={location}
                    onChangeText={setLocation}
                />

                <Text style={styles.label}>Organizer</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Organizer...'
                    value={organizer}
                    onChangeText={setOrganizer}
                />

                <Text style={styles.label}>Description</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Description...'
                    value={description}
                    onChangeText={setDescription}
                />

                <Pressable style={styles.createEventBtn}
                    onPress={handleCreateEvent}
                >
                    <Text>
                        Create Event
                    </Text>
                </Pressable>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
    },

    container: {
        flex: 1,
        padding: 5,
        marginTop: 15,
        marginHorizontal: 5,
        backgroundColor: '#EEEEEEE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        marginBottom: 5,
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

    createEventBtn: {
        backgroundColor: 'grey',
        width: 200,
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});