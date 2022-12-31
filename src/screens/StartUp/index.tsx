import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {styles} from './styles';
import AzaliaLogo from '../../assets/Azalia.svg';

const StartupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AzaliaLogo />
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color="#FF003C"
      />
    </SafeAreaView>
  );
};

export default StartupScreen;
