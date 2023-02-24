import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

import ProductReducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

//const API ='https://ayushiecommerce-default-rtdb.firebaseio.com/'

const initialState = {
    isLoading : false,
    isError : false,
    products: [],
    featureProducts : [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({children})=> {

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async (url)=>{

        dispatch({type: 'SET_LOADER'})
        try {
            const res = await axios.get(url)
            const products = res.data;
            dispatch({type : 'SET_PRODUCTS', payload: products})
        } catch (error) {
            dispatch({type: 'SET_ERROR'})
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" });
        try {
          const res = await axios.get(url);
          const singleProduct = await res.data;
          dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
        } catch (error) {
          dispatch({ type: "SET_SINGLE_ERROR" });
        }
      };

    useEffect(()=>{
     getProducts(API)
    }, [])

return (
    <AppContext.Provider value = {{...state}}>
        {children}
    </AppContext.Provider>
)
}

// custom hook
const useProductContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext, useProductContext }