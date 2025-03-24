import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from "../axios/axios"
import {Ionicons} from "@expo/vector-icons"

export default function Login({ navigation }) {
    const [user, setUser] = useState({
        email: '',
        password: '',
        showPassword: false
    })

    async function handleLogin() {
        await api.postLogin(user)
        .then(
            (response) => {
                console.log(response.data.message)
                navigation.navigate("Home")
            }, (error) => {
                console.log(error)
                Alert.alert(error.response.data.error)
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

            

            <View style={styles.passwordContainer}>
                <TextInput
                    placeholder="Senha"
                    value={user.password}
                    onChangeText={(value) => {setUser({...user, password: value})}}
                    style={styles.passwordInput}
                    secureTextEntry={user.showPassword}
                />

                <TouchableOpacity onPress={() => setUser({...user, showPassword: !user.showPassword })}>
                    <Ionicons name={user.showPassword? "eye-off" : "eye"} size={34} color="gray"/>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity onPress = {handleLogin} style={styles.button}>
                <Text>Login</Text>
            </TouchableOpacity>
            
            <Button title="Cadastro" onPress={()=> navigation.navigate("Cadastro")}/>
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
        backgroundColor: '#006400',
        padding: 10,
        borderRadius: 5,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        width: "100%",
        paddingRight: 10,
    },
    passwordInput: {
        flex: 1,
        height: 40,
    }
})