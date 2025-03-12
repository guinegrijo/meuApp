import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao HOME</Text>

            <TouchableOpacity onPress={()=> navigation.navigate("Evento")} style={styles.button1}>
                <Text style={styles.buttonText} >Cadastro de Evento</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Organizador")} style={styles.button2}>
                <Text style={styles.buttonText} >Cadastro de Organizador</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate("Ingresso")} style={styles.button3}>
                <Text style={styles.buttonText} >Cadastro de Ingresso</Text>
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
        fontWeight: 'bold',
        marginBottom: '10'
    },
    button1: {
        backgroundColor: '#8B0000',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        marginBottom: '10'
    },
    button2: {
        backgroundColor: '#00008B',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        alignItems: 'center',
        marginBottom: '10'
    },
    button3: {
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