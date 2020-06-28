import axios from "axios";

//getting all the brands
export const getBrandList = ({ commit })=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/brands')
    .then( response => {
        //console.log(response.data)
        commit("getBrandList", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}
//getting all the Products
export const getProductList = ({ commit })=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/products')
    .then( response => {
        //console.log(response.data)
        commit("getProductList", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}
//getting all the News
export const getNewsList = ({ commit })=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/news')
    .then( response => {
        //console.log(response.data)
        commit("getNewsList", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}
//getting all the Product of a brand
export const getBrandProductList = ({ commit },{id})=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/brands/'+id+'/products')
    .then( response => {
        //console.log(response.data)
        commit("getBrandProductList", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}
//getting a specific product
export const getProduct = ({ commit },{id})=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/products/'+id)
    .then( response => {
        //console.log(response.data)
        commit("getProduct", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}
//getting a list of random product
export const getRandomProductList = ({ commit })=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/products?sort=random&max=10')
    .then( response => {
        //console.log(response.data)
        commit("getRandomProductList", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}
//getting a specific product via research
export const search = ({ commit },{searchContent})=>{
    commit("loading", true)
    axios.get(process.env.VUE_APP_URL+'/api/products?search='+searchContent)
    .then( response => {
        //console.log(response.data)
        commit("searchResponse", response.data)
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}



//sending an e-email
export const sentMailContact = ({ commit }, {last_name, first_name, email, subject, message})=>{
    commit("loading", true)
    axios.post(process.env.VUE_APP_URL+'/api/contact', {last_name, first_name, email, subject, message})
    .then( response => {
        //console.log(response.data)
        alert("E-mail envoyé avec succès, nous vous repondrons dans les plus bref délais")
        commit("loading", false)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
        commit("loading", false)
    })
}