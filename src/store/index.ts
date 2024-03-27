import { configureStore } from "@reduxjs/toolkit";
import FiltroReducer from "./reducers/Filtro";
import ContatosReducer from "./reducers/Contatos";

const store = configureStore({
    reducer: {
        contato: ContatosReducer,
        filtro: FiltroReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store