import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../data/colors';

const ToggleButton = ({x, y}) => {
  const [isUser, setIsUser] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.button, isUser && styles.selected]}
        onPress={() => setIsUser(true)}
      >
        <Text style={isUser? styles.textBright:styles.textLight}>{x}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[styles.button, !isUser && styles.selected]}
        onPress={() => setIsUser(false)}
      >
        <Text style={isUser? styles.textLight:styles.textBright}>{y}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 25,
    width: '90%',
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  textLight: {
    fontSize: 16,
    color: 'silver',
  },  
  textBright: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'white',
  },
});

export default ToggleButton;