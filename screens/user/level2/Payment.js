import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../../data/colors";
import { useNavigation } from "@react-navigation/native";

const Payment = () => {
    const navigation = useNavigation();
    const handlePayment = () => {
        // Implement your login logic here
        //console.log('Logging in with:', username, password);
        navigation.navigate('Congrats');
    };
    return (
        <View style={styles.toContainer}>
            <View>
                <LinearGradient
                    colors={[colors.primary, colors.secondary,]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.topView}
                >
                    <Text style={styles.topViewText}>$12.00</Text>
                </LinearGradient>
            </View>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <View style={{ width: '100%' }}>
                        <Text style={styles.label}>Card Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Master Card or Visa Card Number"
                            onChangeText={text => setUsername(text)}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flex: 1, marginRight: 5 }}>
                                <Text style={styles.label}>Expiry Date</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Expiry Date"
                                />
                            </View>
                            <View style={{ flex: 1, marginRight: 5 }}>
                                <Text style={styles.label}>CVV</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="CVV"
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Your Name"
                        onChangeText={text => setUsername(text)}
                    />
                    <LinearGradient
                        colors={[colors.primary, colors.secondary,]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.loginButton}
                    >
                        <TouchableOpacity onPress={handlePayment}>
                            <Text style={styles.buttonText}>Pay Now</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    toContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    topView: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topViewText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'left',
        width: '100%',
    },
    input: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        marginTop: 7,
    },
    paymentBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%',
        marginTop: 20,
        height: 45,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default Payment;