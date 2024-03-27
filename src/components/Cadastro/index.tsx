import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import NovoCadastroClass from "../../models/Contato"
import { editar, remover } from "../../store/reducers/Contatos";
import * as S from './styles'

type Props = NovoCadastroClass

const NovoCadastro = ({
    nomeContato: nomeContatoOriginal,
    emailContato: emailContatoOriginal,
    phoneContato: phoneContatoOriginal,
    id
}: Props) => {
    const dispatch = useDispatch()

    const [estaEditando, setEstaEditando] = useState(false)
    const [nomeContato, setnomeContato] = useState('')
    const [emailContato, setemailContato] = useState('')
    const [phoneContato, setphoneContato] = useState('')
    
    useEffect(() => {
        if (nomeContatoOriginal.length > 0) {
          setnomeContato(nomeContatoOriginal)
        }
      }, [nomeContatoOriginal])
    
      useEffect(() => {
        if (emailContatoOriginal.length > 0) {
          setemailContato(emailContatoOriginal)
        }
      }, [emailContatoOriginal])
    
      useEffect(() => {
        if (phoneContatoOriginal.length > 0) {
          setphoneContato(phoneContatoOriginal)
        }
      }, [phoneContatoOriginal])

      function cancelarEdicao() {
        setEstaEditando(false)
        setnomeContato(nomeContatoOriginal),
          setemailContato(emailContatoOriginal),
          setphoneContato(phoneContatoOriginal)
      }

      return(
        <main>
            <S.Formulario>
            <S.nameRegister 
            type="text"
            placeholder="Nome Completo"
            disabled={!estaEditando}
            value={nomeContato}
            onChange={(e) => setnomeContato(e.target.value)}
            />
            <S.emailRegister 
            type="email"
            placeholder="E-mail"
            disabled={!estaEditando}
            value={emailContato}
            onChange={(e) => setemailContato(e.target.value)}
            />
            <S.phoneRegister
            type="tel"
            placeholder="(99) 9 9999-9999"
            disabled={!estaEditando}
            value={phoneContato}
            onChange={(e) => setphoneContato(e.target.value)}
            />
            {estaEditando ? (
                <>
                <S.ButtonSave
                type="button"
                onClick={() => {
                    dispatch(
                        editar({
                            nomeContato,
                            emailContato,
                            phoneContato,
                            id
                        })
                    )
                    setEstaEditando(false)
                }}
                >
                Salvar
                </S.ButtonSave>
                <S.ButtonCancel type="button" onClick={cancelarEdicao}>
                Cancelar
                </S.ButtonCancel>
                </>
            ) : (
                <>
                <S.Button type="button" onClick={() => setEstaEditando(true)}>
                    Editar
                </S.Button>
                <S.ButtonCancel type="button" onClick={() => dispatch(remover(id))}>
                    Remover
                </S.ButtonCancel>
                </>
            )}
        </S.Formulario>
        </main>
      )
}

export default NovoCadastro