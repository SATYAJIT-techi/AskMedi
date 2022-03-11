import { View, Text, Button, StyleSheet,TextInput, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


export default function Login() {
    const navigation=useNavigation()
    const [username, setUserName] = React.useState("");
    const [password, setPassword] = React.useState(null);
    const handleLogin=()=>{
        // if( username==="asim" && password==="123")
        navigation.navigate("dashboard")
        // else
        // Alert.alert("Invalid Creds")
    }
  return (
    <SafeAreaView >
     <View style={{justifyContent:"space-between"}}>
     <Text style={{textAlign:"center", fontSize:40}}>Login</Text>
     <TextInput
        style={styles.input}
        onChangeText={setUserName}
        value={username}
        placeholder="Username"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
      />

     <View style={{flexDirection:"row", justifyContent:"space-around",marginBottom:15}}>
    
     <Button onPress={()=>handleLogin()} title={"Login"}></Button>

     </View>

    <View style={{justifyContent:"space-around"}}>
    <Text>New User?</Text>
    <Button onPress={()=>navigation.navigate("signin")} title={"Go to SignIn"}></Button>
    </View>
     </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });