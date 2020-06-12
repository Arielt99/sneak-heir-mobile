import axios from "axios";

//getting all the brands
export const getBrandList = ({ commit })=>{
    axios.get('http://127.0.0.1:8000/api/brands')
    .then( response => {
        //console.log(response.data)
        commit("getBrandList", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
    })
}
//getting all the Products
export const getProductList = ({ commit })=>{
    axios.get('http://127.0.0.1:8000/api/products')
    .then( response => {
        //console.log(response.data)
        commit("getProductList", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
    })
}
//getting all the News
export const getNewsList = ({ commit })=>{
    axios.get('http://127.0.0.1:8000/api/news')
    .then( response => {
        //console.log(response.data)
        commit("getNewsList", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
    })
}
//getting all the Product of a brand
export const getBrandProductList = ({ commit },{id})=>{
    axios.get('http://127.0.0.1:8000/api/brands/'+id+'/products')
    .then( response => {
        //console.log(response.data)
        commit("getBrandProductList", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
    })
}
//getting a specific product
export const getProduct = ({ commit },{id})=>{
    axios.get('http://127.0.0.1:8000/api/products/'+id)
    .then( response => {
        //console.log(response.data)
        commit("getProduct", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
    })
}
//getting a list of random product
export const getRandomProductList = ({ commit })=>{
    axios.get('http://127.0.0.1:8000/api/products?sort=random&max=10')
    .then( response => {
        //console.log(response.data)
        commit("getRandomProductList", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
    })
}
//getting a specific product
export const search = ({ commit },{searchContent})=>{
    axios.get('http://127.0.0.1:8000/api/products?search='+searchContent)
    .then( response => {
        console.log(response.data)
        commit("searchResponse", response.data)
    })
    .catch( error =>  {
        //console.log(error.response.data)
        //alert("erreur du serveur, réessayez plus tard")
    })
}



//sending an e-email
export const sentMailContact = ({ commit }, {last_name, first_name, email, subject, message})=>{
    axios.post('http://127.0.0.1:8000/api/contact', {last_name, first_name, email, subject, message})
    .then( response => {
        //console.log(response.data)
        alert("E-mail envoyé avec succès, nous vous repondrons dans les plus bref délais")
    })
    .catch( error =>  {
        //console.log(error.response.data)
        alert("erreur du serveur, réessayez plus tard")
    })
}