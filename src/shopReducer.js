// Add To cart
// Remove Cart
// UpdateCart
// Calculatecart
// clearcart

export const initialState = JSON.parse(localStorage.getItem('cart-items')) || {
    products:[],
    total:0,
    theme:"light"
}

const shopReducer = (state,action)=>{
    const {type,payload} = action;

    switch(type){
        case 'ADD-TO-CART':
            return {
                ...state,
                products: payload.products
            }
        case 'UPDATE-PRODUCT-QUENTITY':
            return {
                ...state,
                products: payload.products
            }
        case 'REMOVE-FROM-CART':
            return {
                ...state,
                products: payload.products
            }
        case 'CALCULATE-TOTAL-PRICE':
            return {
                ...state,
                total: payload.total
            }
        case 'CLEAR_CART':
                return initialState;
        case 'THEME':
            return {
                ...state,
                theme: payload
            }
    
            default:
                throw new Error("unknown reducer action");
    }
}

export default shopReducer;