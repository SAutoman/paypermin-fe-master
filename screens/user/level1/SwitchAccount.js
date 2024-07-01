import { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import colors from "../../../data/colors";

const SwitchAccount = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.appUser}>{isEnabled ? "I'm user" : "I'm professional"}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? colors.primary : colors.secondary}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{marginTop: 50, transform: [{ scaleX: 5 }, { scaleY: 5 }] }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    appUser: {
        fontSize: 24,
        color: colors.secondary,
        fontWeight: 'bold',
    }
})

export default SwitchAccount;