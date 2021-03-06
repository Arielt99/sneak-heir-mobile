//brandList = response.data from getBrandList in action
export const getBrandList = (state, brandList)=>{
    state.EveryBrands =[]
    for (let i=0; i<brandList.length; i++){
        state.EveryBrands.push({
        banner : brandList[i].banner,
        description : brandList[i].description,
        id : brandList[i].id,
        image : brandList[i].image,
        name : brandList[i].name
        })
    }
}
//productList = response.data from getProductList in action
export const getProductList = (state, productList)=>{
    state.EveryProducts =[]
    for (let i=0; i<productList.length; i++){
        state.EveryProducts.push({
            id : productList[i].id,
            principal_images : productList[i].principal_images,
            name : productList[i].name,
            price : productList[i].price,
            brand_id : productList[i].brand_id,
        })
    }
}
//newsList = response.data from getNewsList in action
export const getNewsList = (state, newsList)=>{
    state.EveryNews =[]
    for (let i=0; i<newsList.length; i++){
        state.EveryNews.push({
            title : newsList[i].title,
            resume : newsList[i].resume,
            id : newsList[i].id,
            image : newsList[i].image,
            content : newsList[i].content,
            author : newsList[i].author,
            posted_at : newsList[i].created_at,
        })
    }
}
//BrandProductList = response.data from getBrandProductList in action
export const getBrandProductList = (state, BrandProductList)=>{
    state.productList =[]
    for (let i=0; i<BrandProductList.length; i++){
        state.productList.push({
            id : BrandProductList[i].id,
            principal_images : BrandProductList[i].principal_images,
            name : BrandProductList[i].name,
            price : BrandProductList[i].price,
            brand_id : BrandProductList[i].brand_id,
        })
    }
}
//GetedProduct = response.data from getProduct in action
export const getProduct = (state, GetedProduct)=>{
    state.product =[]
    state.product = GetedProduct
}
//RandomProductList = response.data from getRandomProductList in action
export const getRandomProductList = (state, RandomProductList)=>{
    state.RandomProducts =[]
    for (let i=0; i<RandomProductList.length; i++){
        state.RandomProducts.push({
            id : RandomProductList[i].id,
            principal_images : RandomProductList[i].principal_images,
            name : RandomProductList[i].name,
            price : RandomProductList[i].price,
            brand_id : RandomProductList[i].brand_id,
        })
    }
}
//RandomProductList = response.data from getRandomProductList in action
export const searchResponse = (state, search)=>{
    state.searchResponse =[]
    for (let i=0; i<search.length; i++){
        state.searchResponse.push({
            id : search[i].id,
            principal_images : search[i].principal_images,
            name : search[i].name,
            price : search[i].price,
            brand_id : search[i].brand_id,
        })
    }
}


//loading
export const loading = (state, loading )=>{
    state.loading = loading
}

