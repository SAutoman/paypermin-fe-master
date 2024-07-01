import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import colors from '../data/colors';
import { LinearGradient } from 'expo-linear-gradient';
//import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import ToggleButton from '../components/tools/ToggleButton';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSignup = () => {
        // Implement your login logic here
        console.log('Logging in with:', username, password);
    };

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <View style={{ width: '100%' }}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Full Name"
                        onChangeText={text => setUsername(text)}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Email"
                        onChangeText={text => setUsername(text)}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Password"
                        secureTextEntry
                        onChangeText={text => setPassword(text)}
                    />
                    <Icon name="eye" style={styles.eyeIcon} />
                </View>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Phone Number"
                    onChangeText={text => setUsername(text)}
                />
                {/* <View style={styles.checkboxContainer}>
            <CheckBox
              value={rememberMe}
              onValueChange={() => setRememberMe(!rememberMe)}
            />
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </View> */}
                <ToggleButton x={"I'm User"} y={"I'm Professional"} />
                <LinearGradient
                    colors={[colors.primary, colors.secondary,]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.loginButton}
                >
                    <TouchableOpacity onPress={handleSignup}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <Text style={{ marginTop: 20, }}>Already have an account? <Text style={{ color: colors.secondary, fontWeight: 'bold', }}>Sign in</Text></Text>
            </View>
        </ScrollView>
    );
};

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

export default Register;