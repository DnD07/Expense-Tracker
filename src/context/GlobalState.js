import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'


 // initialState

const initialState = {
    transactions: []
}

//create context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

//actions
function deleteTransaction (id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id 
    })
}

//add transaction

function AddTransaction(id){
    dispatch({
        type: "ADD_Transaction",
        payload: id
    })
}

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            AddTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


