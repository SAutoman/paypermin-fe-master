import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox';
import colors from '../../../data/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/Entypo";

const PersonalInfo = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSave = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
    };
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={{ width: '100%', alignItems:'center' }}>
                <Image
                    source={{ uri: 'https://loremflickr.com/cache/resized/65535_52485773254_572ae23e7a_320_240_nofilter.jpg' }}
                    style={styles.photo}
                />
                <Text style={styles.name}>Joseph Cooper</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setUsername(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                    />
                    <Icon name="eye" style={styles.eyeIcon} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Mobile Number"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Gender"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date of birth"
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                    placeholder="Description"
                    onChangeText={text => setUsername(text)}
                    multiline={true}
                    numberOfLines={4}
                />
                <LinearGradient
                    colors={[colors.primary, colors.secondary,]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.loginButton}
                >
                    <TouchableOpacity onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </LinearGradient>
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
    photo: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
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
    eyeIcon: {
        position: 'absolute',
        right: '3%',
        bottom: 23,
        fontSize: 25,
        color: colors.secondary,
    },
    forgotpw: {
        color: colors.secondary,
        width: '100%',
        textAlign: 'right',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        display: 'none',
    },
    checkboxLabel: {
        marginLeft: 8,
    },
    loginButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '90%',
        marginTop: 40,
        height: 45,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default PersonalInfo