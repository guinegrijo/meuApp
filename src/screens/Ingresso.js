import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from "react-native";
import api from "../axios/axios"

export default function Ingresso() {
    const [Ingresso, setIngresso] = useState({
        preco: '',
        tipo: '',
        fk_id_evento: ''
    })

    async function handleCadastroIngresso() {
        await api.postCadastroIngresso(Ingresso)
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
                placeholder="Preço"
                value={Ingresso.preco}
                onChangeText={(value) => {setIngresso({...Ingresso, preco: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="Tipo de ingresso"
                value={Ingresso.tipo}
                onChangeText={(value) => {setIngresso({...Ingresso, tipo: value})}}
                style={styles.input}
            />

            <TextInput
                placeholder="ID evento"
                value={Ingresso.fk_id_evento}
                onChangeText={(value) => {setIngresso({...Ingresso, fk_id_evento: value})}}
                style={styles.input}
            />

            <TouchableOpacity onPress = {handleCadastroIngresso} style={styles.button}>
                <Text style={styles.buttonText} >Cadastrar Ingresso</Text>
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
        backgroundColor: '#006400',
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