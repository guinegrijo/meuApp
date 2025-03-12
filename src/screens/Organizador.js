import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from "../axios/axios"

export default function Organizador() {
    const [organizador, setOrganizador] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: ''
    })

    async function handleCadastroOrganizador() {
        await api.postCadastroOrganizador(organizador)
        .then(
            (response) => {
                console.log(response.data.message)
                Alert.alert(response.data.message)
            }, (error) => {
                console.log(error)
                Alert.alert(error.response.data.error)
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça Cadastro do Organizador</Text>

            <TextInput 
                placeholder="Nome"
                value={organizador.nome}
                onChangeText={(value) => {setOrganizador({...organizador, nome: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="E-mail"
                value={organizador.email}
                onChangeText={(value) => {setOrganizador({...organizador, email: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="Senha"
                value={organizador.senha}
                onChangeText={(value) => {setOrganizador({...organizador, senha: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="Telefone"
                value={organizador.telefone}
                onChangeText={(value) => {setOrganizador({...organizador, telefone: value})}}
                style={styles.input}
            />

            <TouchableOpacity onPress = {handleCadastroOrganizador} style={styles.button}>
                <Text style={styles.buttonText} >Cadastrar Organizador</Text>
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
        backgroundColor: '#00008B',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
})