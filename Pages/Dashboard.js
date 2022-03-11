import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';


export default function Dashboard() {
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      const [location, setLocation] = useState({
          coords:{
              latitude:0,
              longitude:0
          }
      });
  const [errorMsg, setErrorMsg] = useState(null);
       useEffect(()=>{
         const getLocation=async()=>{
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              return;
            }
            console.log(status)
      
            let location = await Location.getCurrentPositionAsync({});
            console.log(location)
            setLocation(location);
            setRegion({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,

            })
        }
        getLocation()
       },[])
      return (          
        <View style={styles.container}>
            <Text style={{fontSize:25}}>Dashboard</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            region={region}
            //onRegionChangeComplete runs when the user stops dragging MapView
            onRegionChangeComplete={(region) => setRegion(region)}
          > 
          <Marker
          key={1}
          coordinate={{
              latitude:location.coords.latitude,longitude:location.coords.longitude
          }}
          title={"Home"}
          
          description={"Bunty"}
          image={require("../assets/pngegg.png") }
        />
          </MapView>
          {/* <Button>Get Current Location</Button> */}
          {/*Display user's current region:*/}
          <Text style={styles.text}>Current latitude: {region.latitude}</Text>
          <Text style={styles.text}>Current longitude: {region.longitude}</Text>
        </View>
      );
            
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height/3,
    },
  });