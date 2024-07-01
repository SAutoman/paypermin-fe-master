import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import colors from '../../../data/colors';
import { LinearGradient } from 'expo-linear-gradient';
//import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

const PaymentInfo = () => {
    const handleSave = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
    };
    return (
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
                    <TouchableOpacity onPress={handleSave}>
                        <Text style={styles.buttonText}>Save Card</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <View style={styles.outerBox}>
                    <View style={styles.paymentBox}>
                        <Text style={{ flex: 1 }}>Available Funds</Text>
                        <TextInput
                            style={[styles.input, { flex: 1, backgroundColor: colors.secondary, fontWeight: 'bold' }]}
                            placeholder="$20.75"
                            onChangeText={text => setUsername(text)}
                            editable={false} placeholderTextColor={'white'}
                        />
                    </View>
                    <View style={styles.paymentBox}>
                        <Text style={{ flex: 1, marginRight: 5 }}>Add Funds $</Text>
                        <TextInput
                            style={[styles.input, { flex: 1, marginRight: 5 }]}
                            placeholder="0.00"
                            onChangeText={text => setUsername(text)}
                        />
                    </View>
                    <LinearGradient
                        colors={[colors.primary, colors.secondary,]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.loginButton}
                    >
                        <TouchableOpacity onPress={handleSave}>
                            <Text style={styles.buttonText}>Add Funds</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    outerBox: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        minHeight: 100,
        flex: 1,
        width: '100%',
        marginTop: 40,
        borderRadius: 10,
    }
});

export default PaymentInfo;