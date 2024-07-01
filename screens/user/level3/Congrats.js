import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../../data/colors";
import { useNavigation } from "@react-navigation/native";
useNavigation

const Congrats = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.bgCheck}
            >
                <Icon name='check' style={styles.check} />
            </LinearGradient>
            <View style={styles.headingCon}>
                <Text style={styles.heading}>Congratulations</Text>
            </View>
            <View style={styles.subheadCon}>
                <Text style={styles.subhead}>Your Payment is Successful</Text>
                <Text style={styles.subhead}>Call is booked!</Text>
            </View>
            <LinearGradient
                colors={[colors.primary, colors.secondary,]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={styles.btnHome}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.btnHomeText}>Back to Home</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bgCheck: {
        height: 200, width: 200,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    check: {
        fontSize: 70,
        color: 'white',
    },
    headingCon : {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight:'bold',
        color: colors.primary,
    },
    subheadCon: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subhead: {
        fontSize: 18,
        fontWeight:'bold',
    },
    btnHome: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%',
        alignSelf:'center',
        marginTop: 40,
        height: 45,
        position:'absolute',
        bottom: 20,
    },
    btnHomeText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default Congrats;