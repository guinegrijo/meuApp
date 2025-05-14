import axios from "axios"
import * as SecureStore from 'expo-secure-store'

const api = axios.create({
    baseURL: "http://10.89.240.71:5000/api/v1/", // mudar ip
    headers: {"accept": "application/json"}
})

api.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync("token")
        if (token) {
            config.headers.Authorization = `${token}`
        }
        return config
    }, (error) => Promise.reject(error)
)

const sheets =  {
    postLogin: (user) => api.post("login", user),
    postCadastro: (user) => api.post("user", user),
    postEvento: (evento) => api.post("evento", evento),
    postCadastroOrganizador: (organizador) => api.post("organizador", organizador),
    postCadastroIngresso: (ingresso) => api.post('ingresso', ingresso),
    getEventos: () => api.get("evento"),
    getIngressoPorEvento: (idEvento) => api.get(`ingresso/evento/${idEvento}`),
    createIngresso: (dados) => api.post("/ingresso", dados),
}

export default sheets