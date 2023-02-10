export const ADD = (item) => {
    return {
        type: "ADD_CARD",
        payload: item
    }
}
export const DLT = (id) => {
    return {
        type: "DELETE_CARD",
        payload: id
    }
}
export const DLTALL = () => {
    return {
        type: "DELETE_ALL",
    }
}
export const ADDQTY = () => {
    return {
        type: "ADD_QNTY",  
    }
}
export const DLTQTY = () => {
    return {
        type: "DEL_QNTY",
       
    }
}