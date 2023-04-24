import React from 'react';
import { StyleSheet, View, Text, Image,TouchableOpacity,ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

export default function Home({navigation}){
  return (
    <ImageBackground source={require('./../img/background4.jpg')} style={styles.background}>
        <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <LottieView source={require('../assets/avatar.json')} autoPlay loop speed={0.5} style={styles.avatar} />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>Lumine</Text>
      </View>
      <View style={styles.box_scheduleTitle}>
          <Text style={styles.scheduleTitle}>This week's schedule</Text>
        </View>
      <View style={styles.scheduleContainer}>
        <View style={styles.scheduleList}>

          <TouchableOpacity onPress={() => navigation.navigate("BarCode")} style={{flexDirection:'row', marginLeft:140, marginBottom:15}}>
          <Text style={styles.Text_page}>Scan BarCode</Text>
          <Icon name="arrow-right" size={20} color={'#ffffff'} style={{marginLeft: 10}} />
          </TouchableOpacity>
        </View>
      </View>
      
      
    </View>
      
    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  calendar_list: {
    color:'#ffffff',
    flexDirection: "row",
    marginBottom:10,
  },
  text_list:{
    marginRight: 80,
    color:'#FF8E4F',
    fontWeight:'bold',
    width:90,
  },
  text_list1:{
    color:'#FF8E4F',
    fontWeight:'bold',
  },
  spacer: {
    marginHorizontal: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
  
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
  avatar: {
    width: 200,
    height: 260,
    borderRadius: 50,
  },
  userInfoContainer: {
    marginTop: 10,
  },
  userName: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8E4F',
    justifyContent: 'center',
    paddingBottom: 22,
  },
  scheduleContainer: {
    marginTop: 40,
  },
  box_scheduleTitle:{
    flex:0.2,
    width: '100%',
    backgroundColor: '#FFCCD2',
    height:10,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
  },
  scheduleTitle: {
    justifyContent:'center',
    fontSize: 16,
    color: '#B53939',
    fontWeight: 'bold',
  },
  scheduleList: {
    // style for schedule list
    borderRadius:50,
    paddingLeft:30,
  },
  button1: {
    marginTop:25,
    backgroundColor: '#B53939',
    padding: 10,
    width: 181.28,
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 49,
    gap: 10,
  },
  buttonText1: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold',
    
  },
  Text_page:{
    fontSize: 16,
    fontWeight:'600',
    marginLeft:30,
    marginTop:5,
    color:'#fff',
  },
});
