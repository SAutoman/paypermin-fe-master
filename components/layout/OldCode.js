import { View, Text, StyleSheet, Switch } from "react-native"
import colors from "../../data/colors";
//import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default OldCode = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    return (
        <View style={{ width: '96%', padding: 10, backgroundColor: colors.cardbg, alignSelf: 'center' }}>
            <View style={[styles.container, { backgroundColor: 'transparent', justifyContent: 'space-between', width: '100%', }]}>
                <Text style={styles.name}>Joseph Cooper</Text>
                <View style={{ flexDirection: 'row', paddingRight: 20 }}>
                    <Icon name="copy" style={styles.topIcons} />
                    <Icon name="video" style={styles.topIcons} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10 }}>
                <View style={[styles.container, { backgroundColor: 'transparent', paddingLeft: 5, }]}>
                    <Text style={{ fontWeight: 'bold' }}>Doctor</Text>
                    <Text style={{ marginLeft: 3, marginRight: 3 }}>:</Text>
                    <Text>Cardiologist</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{paddingTop: 18, fontSize: 9}}>{isEnabled? 'Remind me':"Don't remind"}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        //alignItems: 'center',
        backgroundColor: colors.cardbg,
        borderRadius: 10,
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
        paddingLeft: 5,
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