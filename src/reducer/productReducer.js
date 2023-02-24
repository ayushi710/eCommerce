import { DATA } from "../components/DATA"

const ProductReducer = (state , action) => {

    switch(action.type) {
        case 'SET_LOADER':
            return {
                ...state,
                isLoading: true
            }
        case 'SET_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case 'SET_PRODUCTS':
            const _products = action.payload || DATA
            const featureProducts = _products.filter((ele)=> ele.featured === true)
            console.log("sdede",featureProducts)
            return {
                ...state,
                isLoading: false,
                products:_products,
                featureProducts: featureProducts
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };

            case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };

            case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };

        default: return state
    }
}


export default ProductReducer