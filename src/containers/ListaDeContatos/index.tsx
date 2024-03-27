import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NovoCadastro from "../../components/Cadastro";
import Contato from "../../models/Contato";
import { RootReducer } from "../../store";
import { alteraTermo } from "../../store/reducers/Filtro";
import { cadastrar } from "../../store/reducers/Contatos";
import * as S from "./styles"

const ListaDeCadastro = () => {
    const { itens } = useSelector((state: RootReducer) => state.contato)
    const { termo } = useSelector((state: RootReducer) => state.filtro)

    const filtraContato = () => {
        return itens.filter((item) =>
       item.nomeContato.toLowerCase().includes(termo.toLowerCase()) 
        )
    }

    const dispatch = useDispatch()
    const [nomeContato, setNomeContato] = useState('')
    const [emailContato, setEmailContato] = useState('')
    const [phoneContato, setPhoneContato] = useState('')

    const cadastrarContato = (evento: FormEvent) => {
        evento.preventDefault()
        const cadastroParaAdicionar: Contato ={
            id: 0,
            nomeContato,
            emailContato,
            phoneContato
        }
        dispatch(cadastrar(cadastroParaAdicionar))
        limparCampos()
    }
    
    const limparCampos = () => {
        setNomeContato('')
        setEmailContato('')
        setPhoneContato('')
    }

    return (
        <main>
          <div>
            <p>Lista de contatos em react</p>
            <div>
              <S.InputSearch
                type="text"
                placeholder="Localizar contato ...."
                value={termo}
                onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
              />
            </div>
            <div>
              <S.Formulario onSubmit={cadastrarContato}>
                <S.InputNome
                  value={nomeContato}
                  required
                  onChange={({ target }) => setNomeContato(target.value)}
                  type="text"
                  placeholder="Nome completo"
                />
                <S.InputEmail
                  value={emailContato}
                  required
                  onChange={({ target }) => setEmailContato(target.value)}
                  type="email"
                  placeholder="E-mail"
                />
                <S.InputTelefone
                  value={phoneContato}
                  required
                  onChange={({ target }) => setPhoneContato(target.value)}
                  type="Tel"
                  placeholder="(99) 9 9999-9999"
                />
                <S.Button type="submit">Salvar</S.Button>
                <S.CancelButton type="button" onClick={limparCampos}>
                  Cancelar
                </S.CancelButton>
              </S.Formulario>
            </div>
            <ul>
              {filtraContato().map((p) => (
                <li key={p.id}>
                  <NovoCadastro
                    id={p.id}
                    nomeContato={p.nomeContato}
                    emailContato={p.emailContato}
                    phoneContato={p.phoneContato}
                  />
                </li>
              ))}
            </ul>
          </div>
        </main>
      )
}

export default ListaDeCadastro