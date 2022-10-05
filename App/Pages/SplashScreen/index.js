import * as React from 'react';
import {
    View,
    Text, 
    SafeAreaView, 
    StyleSheet,
    StatusBar, 
    Image,
    TouchableOpacity
} from 'react-native';
import {
    LogoPeduli,
    LogoKpcpen,
    LogoKominfo,
    LogoKemenkes,
    LogoBumn
} from '../../assets';

export default SplashScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.contentimg}>
          <Image source={LogoPeduli} style={styles.imgicon}/>
        </View>
        <View style={styles.content}>
          <Text style={styles.textHeader}>Manage task</Text>
          <Text style={styles.textHeader}>make live is balance</Text>
          <Text style={styles.text}>Arrange any task and make it
           done in your to do list</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    contentimg: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLoginIcon:{
        marginBottom:5
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textHeader: {
      fontSize: 32,
      color: 'black',
      fontFamily:'Lato-Bold'
    },
    text: {
      fontFamily:'Lato-Regular',
      color: 'black',
    },
  });