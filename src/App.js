import LoginScreen from "./screens/Login";
import CadastroScreen from "./screens/Cadastro";
import HomeScreen from "./screens/Home"
import EventoScreen from "./screens/Evento"
import OrganizadorScreen from "./screens/Organizador"
import IngressoScreen from "./screens/Ingresso"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import Layout from "./components/Layout";
import TaskList from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import EventoScreen from "./screens/EventosScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="EventoScreen"component={()=>(
          <Layout>
            <EventoScreen/>
          </Layout>
        )}/>

        {/* <Stack.Screen name="TaskList" component={TaskList}>
        </Stack.Screen>

        <Stack.Screen name="TaskDetail" component={TaskDetail}>
        </Stack.Screen> */}

        <Stack.Screen name="Login" component={()=>(
          <Layout>
            <LoginScreen/>
          </Layout>
        )}/>

        <Stack.Screen name="Cadastro" component={()=>(
          <Layout>
            <CadastroScreen/>
          </Layout>
        )}/>

        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Evento" component={EventoScreen}/>
        <Stack.Screen name="Organizador" component={OrganizadorScreen}/>
        <Stack.Screen name="Ingresso" component={IngressoScreen}/>
      </Stack.Navigator>
    </NavigationContainer> 
  )
}

