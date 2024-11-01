import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Alert, Button, TouchableOpacity,ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, {useState} from 'react';


const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};



const MyApp = () => {
    const[pw,setPw] = useState("");
    const[Name, setName] = useState("");
    const[UserType, setUserType] = useState("");
    return (
        <View style={{padding: 20, paddingTop:50}}>
            <Text>User type:</Text>
            <RNPickerSelect
            onValueChange={(value) => setUserType(value)}
            items={[
                { label: 'Admin', value: 'Admin' },
                { label: 'Guest', value: 'Guest' },
                { label: 'User', value: 'User' },
            ]}/>

            <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
            <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>




            <TouchableOpacity
                onPress={() => ToastAndroid.show("Welcome!"+'  '+ UserType+'  '+ Name ,
                    ToastAndroid.SHORT)}>

                <Text>Login</Text>
            </TouchableOpacity>

        </View>
    );
};
//onPress={()  => Alert.alert("Welcome!")}>

// Correct export statement
export default MyApp;



