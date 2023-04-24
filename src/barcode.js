import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from "../component/style";

export default function BarCode({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  const askForCameraPermision=()=>{
    (async()=>{
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted')
    })()
  }
  useEffect(() => {
    askForCameraPermision();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(`scanned : Bar code with type ${type} \n data: ${data}`);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title={'Allow camera'} onPress={()=>askForCameraPermision()}/>
      </View>
    )
  }

  return (
    <View style={{alignItems:'center',
    flex:1,
    backgroundColor:'black',

    justifyContent:'center'}}>
      
      <View style={styles.box_barcode}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{height:600,width:600}}
        />
      </View>
      <View style={styles.box_result}>
        <Text style={{color:'white',fontSize:25}}>{text}</Text>
      </View>
      <View style={styles.box_btn}>
        {scanned && 
        <TouchableOpacity
          activeOpacity={0.5} 
          style={{alignItems:"center",
          justifyContent:'center',
          width:150,
          height:80,
          backgroundColor:"#F9762D",
          borderRadius:30}}
          onPress={() => {setScanned(false);setText('Not scanned yet!')}}
        >
          <Text style={{color:'white',fontSize:25,backgroundColor:'black'}}>Scan Again</Text>
        </TouchableOpacity>
        }
      </View>

    </View>
  );
};

