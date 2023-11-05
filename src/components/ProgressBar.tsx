import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '../styles';

const CustomProgressBar = ({ progress  }) => {
const valid = progress / 100; 
  return (
    <View style={styles.progressContainer}>
     <Progress.Bar progress={valid} width={200} height={15} color={Colors.LIGHTBLUE} borderRadius={10}/>
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: 'center',
    paddingTop:20,
  },
});

export default CustomProgressBar;
