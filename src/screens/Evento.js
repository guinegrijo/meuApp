import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import api from "../axios/axios"

export default function Evento() {

    const [evento, setEvento] = useState({
        nome: '',
        descricao: '',
        local: '',
        data_hora: '',
        fk_id_organizador: ''
    })

    async function handleCadastroEvento() {
        await api.postEvento(evento)
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
            <Text style={styles.title}>Faça cadastro do Evento</Text>

            <TextInput 
                placeholder="Nome"
                value={evento.nome}
                onChangeText={(value) => {setEvento({...evento, nome: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="Descrição"
                value={evento.descricao}
                onChangeText={(value) => {setEvento({...evento, descricao: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="Local"
                value={evento.local}
                onChangeText={(value) => {setEvento({...evento, local: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="Data e hora"
                value={evento.data_hora}
                onChangeText={(value) => {setEvento({...evento, data_hora: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="ID do organizador"
                value={evento.fk_id_organizador}
                onChangeText={(value) => {setEvento({...evento, fk_id_organizador: value})}}
                style={styles.input}
            />

            <TouchableOpacity onPress = {handleCadastroEvento} style={styles.button}>
                <Text style={styles.buttonText} >Cadastrar Evento</Text>
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
        backgroundColor: '#8B0000',
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