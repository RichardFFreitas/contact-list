import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: [
        {
            id: 1,
            nomeContato: 'Julio Cezar',
            emailContato: 'JC@gmail.com',
            phoneContato: '(99) 9 9999-9999'
        },
        {
            id: 2,
            nomeContato: 'Pedro Henrique',
            emailContato: 'PH@gmail.com',
            phoneContato: '(99) 9 9999-9999'
        },
        {
            id: 3,
            nomeContato: 'Matheus Duart',
            emailContato: 'MD@gmail.com',
            phoneContato: '(99) 9 9999-9999'
        },
        {
            id: 4,
            nomeContato: 'Paulo Henrique',
            emailContato: 'PH@gmail.com',
            phoneContato: '(99) 9 9999-9999'
        },
        {
            id: 5,
            nomeContato: 'Richard Felipe',
            emailContato: 'RF@gmail.com',
            phoneContato: '(99) 9 9999-9999'
        },
        {
            id: 1,
            nomeContato: 'Eric Wendell',
            emailContato: 'EW@gmail.com',
            phoneContato: '(99) 9 9999-9999'
        },
    ]
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state.itens = state.itens.filter(
                (contato: { id: number }) => contato.id !== action.payload 
            )
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const indexContato = state.itens.findIndex(
                (p: { id: number }) => p.id ===action.payload.id 
            )
            if (indexContato >= 0) {
                state.itens[indexContato] = action.payload
            }
        },
        cadastrar: (state, action: PayloadAction<Contato>) => {
            const cadastroJaExiste = state.itens.some(
              (contato: { nomeContato: string }) =>
                contato.nomeContato.toLowerCase() ===
                action.payload.nomeContato.toLowerCase()
            )
            if (cadastroJaExiste) {
                alert('Já existe um contato com este nome')
            } else {
                const novoId =
            state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : 1
            state.itens.push({ ...action.payload, id: novoId })
            }
        }
    }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer