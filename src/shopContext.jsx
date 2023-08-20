import { createContext, useContext, useEffect, useReducer } from "react";
import shopReducer, { initialState } from './shopReducer';


 export const shopContext = createContext(initialState);

 


 export const ShopProvider = ({ children }) => {
	const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() =>{
    localStorage.setItem("cart-items",JSON.stringify({total: state.total, products:state.products}))
   },[state])
  

    const calculateTotalPrice = (products) => {
      let total = 0;
      products.forEach((product) => {
        total += product.price * product.quentity;
      });
  console.log(total,"total")
      dispatch({
        type: "CALCULATE-TOTAL-PRICE",
        payload: {
          total,
        },
      });
    };


    const addTocart =(product) =>{
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      
        let updateProduct = [...state.products]

        if(productIndex === -1){
            updateProduct = [
                ...updateProduct,
                {
                    ...product,
                    quentity: 1
                }
            ]
            
            
        }else{
            updateProduct[productIndex] = {
                ...updateProduct[productIndex], quentity: updateProduct[productIndex].quentity + 1,
            };
        };
      

dispatch({
  type: "ADD-TO-CART",
  payload:{
    products:updateProduct,
  }
})

calculateTotalPrice(updateProduct);


    };




    const updateProductQuantety = (product, newQuantity) => {
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      let updatedProduct = [...state.products];
      // < 0
      if (newQuantity <= 0) {
        updatedProduct = updatedProduct.filter((pro) => pro.id !== product.id);
      } else {
        updatedProduct[productIndex] = {
          ...updatedProduct[productIndex],
          quentity: newQuantity,
        };
      }
      
  
      dispatch({
        type: "UPDATE-PRODUCT-QUENTITY",
        payload: {
          products: updatedProduct,
        },
      });
      calculateTotalPrice(updatedProduct);
    };
  

    const removeFromCart = (product) => {
      // naga soo reeb product lasoo baasay
      // ! = =
      const updateProduct = state.products.filter((pro) => pro.id !== product.id);
  
      
  
      dispatch({
        type: "REMOVE-FROM-CART",
        payload: {
          products: updateProduct,
        },
      });
      calculateTotalPrice(updateProduct);
    };

    const clearCart = () =>{
        dispatch({
            type:"CLEAR-CART",
            payload:{}
        })
    }

    const ThemeChanger = (theme)=>{
      if(theme ==="dark"){
        dispatch({
          type:"THEME",
          payload:"dark"
        })
      }else{
        dispatch({
          type:"THEME",
          payload:"light"
        })
      }
    }

    const value = {
        products: state.products,
        total:state.total,
        addTocart,
        updateProductQuantety,
        removeFromCart,
        clearCart,
        ThemeChanger,
        apptheme:state.theme
    }
    return <shopContext.Provider value={value}>{children}</shopContext.Provider>

};

const useShop =()=>{
  const context = useContext(shopContext);

  if(context === undefined){
    throw new Error("context must be inside shop center")
  }

  return context;
}

export default useShop