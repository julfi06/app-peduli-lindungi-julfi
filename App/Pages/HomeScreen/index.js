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
    IconProfile,
    IconBell,
    IconHandQr,
    IconVaccine,
    IconCovidTest,
    IconEhac,
    IconTravelRegulation,
    IconTelemedicine,
    IconHealthcare,
    IconCovid,
    IconFindHospital
} from '../../assets';

export default HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
                    barStyle="light-content"
                    animated={true}
                    backgroundColor="#ffffff" />

        <View style={styles.contentimg}>
          <Image source={IconProfile} style={styles.imgIcon}/>
          <Text style={styles.text1}>Hi,</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('LoginScreen')}>
            <Text style={styles.text2}>Julfi Daffa Agung</Text>
          </TouchableOpacity>
          <Image source={IconBell} style={styles.imgIcon2}/>
        </View>

        <View style={styles.content2}>
            <View style={styles.content3}>
                <View style={styles.content4}>
                <Text style={styles.text3}>Entering A Public Space?</Text>
                <Text style={styles.text4}>Stay alert to stay safe</Text>
                </View>
                <Image source={IconHandQr} style={styles.imgIcon3}/>
            </View>
            <View style={styles.contentcheckin}>
            <Text style={styles.text5}>Check-in Preference</Text>
            </View>
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
      marginTop:10,
      alignItems: 'center',
      flexDirection:'row'
    },
    imgIcon:{
      height:25,
      width:25,
      marginLeft:20
    },
    text1: {
      marginLeft:5,
      fontSize:15,
      textAlign:'left',
      color: 'black',
    },
    text2:{
        fontSize:15,
        color:'black',
        marginLeft:3,
        textDecorationLine:'underline'
    },
    imgIcon2:{
        height:23,
        width:23,
        marginLeft:120
    },
    content2:{
        marginTop:10,
        alignContent:'center',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        marginLeft:20,
        marginRight:20,
        paddingBottom:20
    },
    content3:{
        height:80,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:'#008bde',
        flexDirection:'row',
    },
    text3: {
        marginTop:10,
        marginLeft:20,
        fontSize:18,
        color: 'white',
      },
      text4: {
        fontSize:11,
        marginLeft:20,
        color: 'white'
      },
    imgIcon3:{
        height:60,
        width:60,
        marginRight:10,
        marginTop:20
    },
    content4:{
        marginRight:30,
        backgroundColor:'#008bde',
        borderRadius:10,
    },
    contentcheckin:{
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#ffffff',
        flexDirection:'row',
    },
    text5: {
        marginTop:20,
        fontSize:14,
        marginLeft:20,
        color: 'black'
    }
});