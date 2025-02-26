import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import api from "../axios/axios"

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    async function handleLogin() {
        await api.postLogin(user)
        .then(
            (response) => {
                console.log(response.data.message)
                Alert.alert(response.data.message)
            }, (error) => {
                console.log(error)
                Alert.alert('Error', error.response.data.error)
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça Login</Text>
            <TextInput
                placeholder="E-mail"
                value={user.email}
                onChangeText={(value) => {setUser({...user, email: value})}}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                value={user.password}
                onChangeText={(value) => {setUser({...user, password: value})}}
                style={styles.input}
            />

            <TouchableOpacity onPress = {handleLogin} style={styles.button}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
  
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    input: {
        width: '90%',
        height: 50,
        borderBottomWidth: 1,
        marginTop:20,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 20
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    }
})