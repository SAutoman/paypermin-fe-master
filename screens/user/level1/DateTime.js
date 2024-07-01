import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../data/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DateTime = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const navigation = useNavigation();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  const showTimepicker = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Calendar
        onDayPress={(day) => { console.log('selected day', day) }}
        markedDates={{ [date]: { selected: true } }}
      />
      <Button onPress={showTimepicker} title="Show time picker" />
      {show && (
        <DateTimePicker
          value={date}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}
      <View style={styles.bottomView}>
        {
          isEnabled ?
            <Icon name="phone" style={{ fontSize: 24, color: colors.secondary }} />
            :
            <Icon name="video" style={{ fontSize: 24, color: colors.secondary }} />

        }
        <Text style={styles.callType}>{isEnabled ? "Voice Call" : "Video Call"}</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? colors.primary : colors.secondary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ marginTop: 10, transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
        />

        <LinearGradient
          colors={[colors.primary, colors.secondary,]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={styles.btnProceed}
        >
          <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  callType: {
    fontSize: 24,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnProceed: {
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

export default DateTime;
