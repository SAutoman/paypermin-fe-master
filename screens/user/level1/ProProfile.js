import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../../data/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const ProProfile = () => {
    const navigation = useNavigation();
    const handleBooking = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.topView}>
                <Image
                    source={{ uri: 'https://loremflickr.com/cache/resized/65535_52485773254_572ae23e7a_320_240_nofilter.jpg' }}
                    style={styles.photo}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.name}>Dr. Joseph Cooper</Text>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Doctor</Text>
                        <Text> : </Text>
                        <Text>Therapist</Text>
                    </Text>
                    <View style={styles.proRate}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Rate/Min</Text>
                        <View>
                            <View style={styles.rates}>
                                <View><Icon name="phone" style={styles.icons} /></View>
                                <Text>$12.00</Text>
                            </View>
                            <View style={styles.rates}>
                                <View><Icon name="video" style={styles.icons} /></View>
                                <Text>$12.00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.midView}>
                <Text style={styles.heading}>Details</Text>
                <ScrollView style={{maxHeight: 250,}}>
                    <View>
                        <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    </View>
                </ScrollView>
                <Text style={[styles.heading, {marginTop: 20}]}>Working Hours</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.timeBox, styles.timeDeco]}><Text style={styles.timeText}>9:00 AM</Text></View>
                        <View style={[styles.timeBox, styles.timeDeco]}><Text style={styles.timeText}>5:00 PM</Text></View>
                    </View>
                    <View style={styles.days}><Text style={styles.daysText}>Mon - Fri</Text></View>
                </View>
            </View>
            <View style={styles.bottomView}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary,]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.btnBook}
                >
                    <TouchableOpacity onPress={()=>navigation.navigate('DateTime')}>
                        <Text style={styles.btnText}>Book an Appointment</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topView: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    proRate: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rates: {
        fontWeight: 'bold',
        color: colors.secondary,
        flexDirection: 'row',
    },
    icons: {
        padding: 5,
        color: colors.secondary,
    },
    midView: {
        padding: 20,
        flex: 1,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    desc: {
        color: '#666666',
        paddingBottom: 20,
    },
    timeBox: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 5,
    },
    timeDeco: {
        backgroundColor: '#CCCCCC',
        borderRadius: 5,
    },
    timeText: {
        fontSize: 16,
    },
    days: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.primary,
        borderRadius: 5,
    },
    daysText: {
        fontSize: 16,
        color: 'white',
    },
    bottomView: {
        padding: 20,
        //flex: 1,
        //justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btnBook: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%',
        marginTop: 40,
        height: 45,
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default ProProfile;