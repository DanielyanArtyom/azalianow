import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const EmptyList = () => {
  return (
    <View>
      <Text style={styles.emptyText}>Empty List</Text>
    </View>
  );
};

export default EmptyList;
