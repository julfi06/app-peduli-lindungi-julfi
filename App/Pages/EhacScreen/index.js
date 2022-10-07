import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    TextInput, 
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    LogoTop,
    LogoKpcpen,
    LogoKominfo,
    LogoKemenkes,
    LogoBumn
} from '../../assets';

export default EhacScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ffffff',
    },
})