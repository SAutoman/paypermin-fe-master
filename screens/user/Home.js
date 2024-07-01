import { ScrollView, TextInput, Text, View, StyleSheet, Image } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import cats from "../../data/cats";
import colors from "../../data/colors";
import { useState } from "react";
import ProCard from "../../components/layout/ProCard";

const Home = () => {
    const [catId, setCatId] = useState(1);
    return (
        <View style={{ backgroundColor: 'white', paddingTop: 20, flex: 1 }}>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://loremflickr.com/cache/resized/65535_52485773254_572ae23e7a_320_240_nofilter.jpg' }}
                    style={styles.photo}
                />
                <Text style={styles.name}>User Name</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Icon name="bell" style={styles.bellIcon} />
                    <Text style={{ fontWeight: 'bold' }}>$20.75</Text>
                    <Text>Available</Text>
                </View>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Search" />
                <Icon name="search" style={styles.searchIcon} />
                <Icon name="filter" style={styles.filterIcon} />
            </View>
            <Text style={styles.heading}>Categories</Text>
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    {
                        cats.map(x => (
                            <Text key={x.id} style={[styles.cat, x.id === catId &&
                                { backgroundColor: colors.secondary, color: 'white', fontWeight: 'bold', }]}
                                onPress={() => setCatId(x.id)}>{x.category}
                            </Text>
                        ))
                    }
                </View>
            </ScrollView>
            <Text style={[styles.heading, { marginTop: 10,}]}>Doctors</Text>
            <ScrollView>
                <ProCard />
                <ProCard />
                <ProCard />
                <ProCard />
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

export default Home;