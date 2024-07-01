import { ScrollView, Text, View, StyleSheet, Image } from "react-native"
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Feather';
//import cats from "../../data/cats";
import colors from "../../data/colors";
//import { useState } from "react";
import HistoryCard from "../../components/layout/HistoryCard";

const History = () => {
    return(
        <View style={{ backgroundColor: 'white', flex: 1 }}>

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Search" />
                <Icon name="search" style={styles.searchIcon} />
                <Icon name="filter" style={styles.filterIcon} />
            </View>
            <ScrollView>
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
                <HistoryCard />
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
});

export default History;