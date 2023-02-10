const INIT_STATE = {
    cart: [],
    qnty: 0
}
export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CARD":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                qnty:1
            }
        case "DELETE_CARD":
            const data = state.cart.filter((el) => el.id !== action.payload)
            return {
                ...state,
                cart: data
            }
        case "DELETE_ALL":
            return {
                ...state,
                cart: []
            }
        case "ADD_QNTY":
             /* const incqnty = state.cart.filter((el) => el.id === action.payload)  */
            return {
                ...state,
                qnty: state.qnty + 1
            }
        case "DEL_QNTY":
             /* const decqnty = state.cart.filter((el) => el.id === action.payload) */ 
            return {
                ...state,
                qnty: state.qnty - 1
            }
        default:
            return state
    }
}
