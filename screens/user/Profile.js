import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Switch } from "react-native"
import colors from "../../data/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Profile = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://loremflickr.com/cache/resized/65535_52485773254_572ae23e7a_320_240_nofilter.jpg' }}
                    style={styles.photo}
                />
                <Text style={styles.name}>Joseph Cooper</Text>

                {/*--------------- Personal Details ---------------*/}
                <TouchableOpacity onPress={() => navigation.navigate('PersonalInfo')}>
                    <View style={styles.slot}>
                        <View style={styles.slotChild1}>
                            <View style={styles.icoCon}>
                                <Icon name="user" style={styles.icon} />
                            </View>
                            <Text style={styles.heading}>Personal Details</Text>
                        </View>
                        <Icon name="angle-right" style={styles.slotChild2} />
                    </View>
                </TouchableOpacity>

                {/*--------------- Payment Details ---------------*/}
                <TouchableOpacity onPress={() => navigation.navigate('PaymentInfo')}>
                    <View style={styles.slot}>
                        <View style={styles.slotChild1}>
                            <View style={styles.icoCon}>
                                <Icon name="money-check-alt" style={styles.icon} />
                            </View>
                            <Text style={styles.heading}>Payment Details</Text>
                        </View>
                        <Icon name="angle-right" style={styles.slotChild2} />
                    </View>
                </TouchableOpacity>

                {/*--------------- Switch Account ---------------*/}
                <TouchableOpacity onPress={() => navigation.navigate('SwitchAccount')}>
                    <View style={styles.slot}>
                        <View style={styles.slotChild1}>
                            <View style={styles.icoCon}>
                                <Icon name="people-arrows" style={styles.icon} />
                            </View>
                            <Text style={styles.heading}>Switch Account</Text>
                        </View>
                        <Icon name="angle-right" style={styles.slotChild2} />
                    </View>
                </TouchableOpacity>
                {/*--------------- Notification ---------------*/}
                <View style={styles.slot}>
                    <View style={styles.slotChild1}>
                        <View style={styles.icoCon}>
                            <Icon name="bell" style={styles.icon} />
                        </View>
                        <Text style={styles.heading}>Notification</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? colors.secondary : 'silver'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>

                {/*--------------- Logout ---------------*/}
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.slot}>
                        <View style={styles.slotChild1}>
                            <View style={styles.icoCon}>
                                <Icon name="sign-out-alt" style={styles.icon} />
                            </View>
                            <Text style={styles.heading}>Logout</Text>
                        </View>
                        <Icon name="angle-right" style={styles.slotChild2} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        //justifyContent: 'center',
        alignItems: 'center',
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
    slot: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    slotChild1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icoCon: {
        backgroundColor: colors.cardbg,
        width: 50, height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    icon: {
        fontSize: 25,
        alignSelf: 'center',
    },
    heading: {
        fontSize: 22,
        marginLeft: 20,
    },
    slotChild2: {
        fontSize: 20,
    }
})

export default Profile;