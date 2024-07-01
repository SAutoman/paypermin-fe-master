import { ScrollView, Text, View, StyleSheet, Image } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';
import cats from "../../data/cats";
import colors from "../../data/colors";
import { useState } from "react";
import AppointmentsCard from "../../components/layout/AppointmentsCard";

const Appointments = () => {
    const [catId, setCatId] = useState(1);
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Search" />
                <Icon name="search" style={styles.searchIcon} />
                <Icon name="filter" style={styles.filterIcon} />
            </View>
            <ScrollView>
                <AppointmentsCard />
                <AppointmentsCard />
                <AppointmentsCard />
                <AppointmentsCard />
                <AppointmentsCard />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    photo: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    name: {
        flex: 1,
        fontSize: 20,
        marginRight: 10,
    },
    bellIcon: {
        fontSize: 24,
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 35,
        marginBottom: 15,
        marginTop: 7,
        backgroundColor: '#F6F6F6',
        fontSize: 16,
    },
    searchIcon: {
        position: 'absolute',
        left: 20, bottom: 39,
        fontSize: 20,
    },
    filterIcon: {
        position: 'absolute',
        right: 20, bottom: 37,
        fontSize: 17,
    },
    heading: {
        fontSize: 22,
        //color: colors.primary,
        marginLeft: 10,
    },
    cat: {
        minWidth: 100,
        height: 30,
        borderWidth: 1,
        borderColor: colors.primary,
        margin: 10,
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
    },
});

export default Appointments;