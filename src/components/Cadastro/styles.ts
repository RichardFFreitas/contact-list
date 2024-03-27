import styled from "styled-components";
import c from "../../styles/colors";

export const Formulario = styled.form`
display: flex;
align-items: center;
justify-content: flex-end;
margin-top: 10px;
gap: 3px;

@media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
}
`

export const Button = styled.button`
background-color: ${c.black1};
color: ${c.white};
border: none;
cursor: pointer;
padding: 8px;
border-radius: 8px;
width: 78px;
height: 36px;

&:hover {
    background-color: ${c.grey};
}
`

export const ButtonSave = styled(Button)`
background-color: ${c.green};

&:hover{
    background-color: ${c.greenHover};
}
`

export const ButtonCancel = styled(Button)`
background-color: ${c.red};

&:hover{
    background-color: ${c.redHover};
}
`
export const nameRegister = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid ${c.black1};
  background-color: transparent;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const phoneRegister = styled(nameRegister)`
  width: 215px;

@media (max-width: 768px) {
  width: 100%;
  }
`

export const emailRegister = styled(nameRegister)`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`