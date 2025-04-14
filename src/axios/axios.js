import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:5000/api/v1/",
    headers: {"accept": "application/json"}
})

const sheets =  {
    postLogin: (user) => api.post("login", user),
    postCadastro: (user) => api.post("user", user),
    postEvento: (evento) => api.post("evento", evento),
    postCadastroOrganizador: (organizador) => api.post("organizador", organizador),
    postCadastroIngresso: (ingresso) => api.post('ingresso', ingresso),
    getEventos: () => api.get("evento")
}

export default sheets