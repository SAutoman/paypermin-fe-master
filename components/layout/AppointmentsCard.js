import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native"
import colors from "../../data/colors";
//import Icon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
//import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default AppointmentCard = ({name, cat, subcat, datetime, rate}) => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <Text style={styles.name}>Joseph Cooper</Text>
                <View style={styles.cat}>
                    <Text style={{marginRight:3, fontWeight:'bold'}}>Doctor</Text>
                    <Text style={{marginRight:3}}>:</Text>
                    <Text style={{marginRight:3}}>Cardiologist</Text>
                </View>
                <Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <Text style={styles.datetime}>Date | Time</Text>
                <Text style={styles.rate}>rate / min  $12.00</Text>
            </View>
            <View style={styles.row2}>
                <View style={{flexDirection:'row'}}>
                    <Icon name="copy" style={styles.icos}/>
                    <Icon name="video" style={styles.icos}/>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.txtRemind}>{isEnabled ? 'Remind me' : "Don't remind"}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{margin:-10}}
                    />
                </View>
                <TouchableOpacity style={styles.btnCancelCon}>
                    <Text style={styles.btnCancel}>Cancel Booking</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.cardbg,
        borderRadius: 10,
        width: '96%',
        alignSelf: 'center',
        padding: 10,
        marginBottom: 20,
    },
    row1: {
        width: '67%',
        //textAlign: 'center',
    },
    row2: {
        width: '33%',
        alignItems: 'flex-end'
        //textAlign: 'right',
    },    
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginRight: 10,
    },
    cat: {
        flexDirection: 'row',
        marginTop: 5,
    },
    desc: {
        fontSize: 12,
        marginTop: 10,
    },
    datetime: {
        marginTop: 10,
        color: colors.secondary,

    },
    rate: {
        marginTop: 10,
        fontWeight:'bold',
    },
    icos: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        color: colors.secondary,
    },
    txtRemind: {
        fontSize:10,
        color: colors.secondary,
        padding: 10,
    },
    btnCancelCon: {
        backgroundColor: 'white',
        width: 120,
        borderColor:'black',
        borderWidth: 1,
        borderRadius: 15,
        height: 30,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 50,
    },
    btnCancel: {
        fontSize: 12,
        color: colors.secondary,
    }
});