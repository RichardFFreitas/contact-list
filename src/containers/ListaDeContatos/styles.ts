import styled from 'styled-components'
import c from '../../styles/colors'


export const Formulario = styled.form`
display: flex;
align-items: center;
margin-top: 20px;
gap: 3px;
margin-bottom: 60px;

@media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Button = styled.button`
background-color: ${c.grey1};
color: ${c.black};
border: none;
cursor: pointer;
padding: 8px;
border-radius: 8px;
width: 225px;
height: 35px;

&:hover{
    background-color: ${c.black1};
}

@media (max-width: 768px) {
    width: 100%;
  }
`

export const CancelButton = styled(Button)`
background-color: ${c.red};
width: 72px;
height: 32px;

&:hover{
    background-color: ${c.redHover};
}

@media (max-width: 768px) {
    width: 100%;
  }
`

export const InputNome = styled.input`
padding: 8px;
border: 1px solid ${c.grey};
border-radius: 4px;
line-height: 15px;
width: 100%;
`

export const InputSearch = styled(InputNome)`
margin-top: 8px;
background-color: ${c.black1};
color: ${c.white};
margin-bottom: 10px;

@media (max-width: 768px) {
    width: 100%;
  }
`
export const InputTelefone = styled(InputNome)`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`


export const InputEmail = styled(InputNome)`
  width: 100%;
`

