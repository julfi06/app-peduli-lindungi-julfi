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
import LoginScreen from '../../../../../AndroidProgramming/app-taskita-master/App/Pages/LoginScreen';
import {
    LogoTop,
    LogoKpcpen,
    LogoKominfo,
    LogoKemenkes,
    LogoBumn
} from '../../assets';

export default LoginScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.contentimg}>
          <Image source={LogoTop} style={styles.imgIcon}/>
        </View>

        <TextInput style={[styles.inputStyle, {marginTop:80}]} placeholder="Email"/>
        <PrimaryButton customeStyle={styles.btnLoginStyle} title="LOGIN"/>

        <Text style={styles.text1}>Bekerja sama dengan:</Text>

        <View style={styles.content}>
        <Image source={LogoKpcpen} style={styles.imgIcon2}/>
        <Image source={LogoKominfo} style={styles.imgIcon3}/>
        <Image source={LogoKemenkes} style={styles.imgIcon4}/>
        <Image source={LogoBumn} style={styles.imgIcon5}/>
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#ffffff',
    },
    contentimg: {
      backgroundColor:'#ffffff',
      marginTop:200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgIcon:{
      height:70,
      width:300
    },
    inputStyle:{
        height: 50,
        marginTop: 12,
        borderWidth: 1,
        paddingLeft:30,
        borderRadius:50,
        borderColor:'#695D91',
        fontSize:16,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#695D91'
    },
    btnLoginStyle:{
        marginTop:40,
    },
    content: {
      marginTop:10,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    text1: {
      marginTop:250,
      marginLeft:30,
      fontSize:10,
      textAlign:'left',
      fontFamily:'Lato-Regular',
      color: 'black',
    },
    imgIcon2:{
      marginRight:10,
      height:35,
      width:70,
      alignItems:'center',
      alignContent:'center'
    },
    imgIcon3:{
      marginRight:10,
      height:45,
      width:40,
      alignItems:'center',
      alignContent:'center'
    },
    imgIcon4:{
      marginRight:10,
      height:35,
      width:80,
      alignItems:'center',
      alignContent:'center'
    },
    imgIcon5:{
      height:30,
      width:60,
      alignItems:'center',
      alignContent:'center'
    },
});