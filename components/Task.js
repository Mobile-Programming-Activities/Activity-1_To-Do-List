import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width:340,
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    top:22,
    left:40,
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: 'skyblue',
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
  },

  itemText: {
    maxWidth: '80%',
  },

  circular: {
    width: 14,
    height: 14,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 6,
  },
});

export default Task;