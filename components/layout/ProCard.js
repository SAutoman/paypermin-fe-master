import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import colors from "../../data/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ProCard = ({ name, cat, subcat, desc, aprv, fav }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProProfile')}>
            <View style={[styles.container, { width: '96%', alignSelf: 'center', marginTop: 15, }]}>
                <Image
                    source={{ uri: 'https://loremflickr.com/cache/resized/65535_52485773254_572ae23e7a_320_240_nofilter.jpg' }}
                    style={styles.photo}
                />
                <View>
                    <View style={[styles.container, { backgroundColor: 'transparent', justifyContent: 'space-between', }]}>
                        <Text style={styles.name}>Joseph Cooper</Text>
                        <View style={{ flexDirection: 'row', paddingRight: 20 }}>
                            <Icon name="user-check" style={styles.topIcons} />
                            <Icon name="heart" style={styles.topIcons} />
                        </View>
                    </View>
                    <View style={[styles.container, { backgroundColor: 'transparent', paddingLeft: 5, }]}>
                        <Text style={{ fontWeight: 'bold' }}>Doctor</Text>
                        <Text style={{ marginLeft: 3, marginRight: 3 }}>:</Text>
                        <Text>Cardiologist</Text>
                    </View>
                    <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    <View style={[styles.container, { backgroundColor: 'transparent', justifyContent: 'space-between' }]}>
                        <LinearGradient
                            colors={[colors.secondary, colors.primary,]}
                            start={{ x: 1, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={{ borderRadius: 15, marginRight: 20 }}
                        >
                            <TouchableOpacity onPress={() => navigation.navigate('DateTime')}>
                                <Text style={styles.btnBook}>Book</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        <View style={{ marginRight: 20 }}>
                            <Text style={{ color: colors.secondary }}>Direct Call</Text>
                            <Text><Icon name="phone" style={styles.bottomIcons} /> $12.00</Text>
                            <Text><Icon name="video" style={styles.bottomIcons} /> $12.00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.cardbg,
        borderRadius: 10,
    },
    photo: {
        width: 130,
        height: 160,
        borderRadius: 10,
        marginRight: 5,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
        paddingLeft: 5,
        width: 170,
    },
    topIcons: {
        fontSize: 18,
        color: colors.secondary,
        padding: 3,
    },
    desc: {
        maxWidth: 240,
        paddingLeft: 5,
        fontSize: 12,
        paddingTop: 7, paddingBottom: 5,
    },
    btnBook: {
        padding: 5,
        marginLeft: 5,
        height: 30,
        width: 90,
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
    },
    bottomIcons: {
        color: colors.secondary,
    }
});

export default ProCard