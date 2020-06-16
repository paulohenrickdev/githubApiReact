import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* 0(eixo X) 0(eixo Y) 20px(blur) rgba(cor do blue)*/
  padding: 30px;
  margin: 80px auto; /* 80px(em cima e em baixo) auto(laterais vai se ajustar automaticamente)*/

  h1 {
    font-size: 20px;
    display: flex; /* Display flex pra eu poder mecher nele abaixo */
    flex-direction: row;
    align-items: center; /* Alinhando o icone e o texto ao centro */

    svg {
      margin-right: 10px; /* Distanciar o icone do texto */
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px; /* Distanciando ele do "header"*/
  display: flex;
  flex-direction: row;

  input {
    flex: 1; /* Isso faz com que ele ocupe todo o espaço possivel */
    border: 1px solid #eeee;
    padding: 10px 15px; /* 10px(em cima e em baixo) 15px(direita e esquerda)*/
    border-radius: 4px;
    font-size: 16px;
  }
`;

/* Fazendo animação de rotação do icone de espera */
const rotate = keyframes`
  from {
    transform: rotate(0deg); /* Começa do 0 e vai até 360 */
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading /* Setar o disabled de acordo com o loading */,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  /* O codigo abaixo garante que todo conteudo desse botao sempre esteja ao centro */
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  } /* Com o & eu faço a referencia a este botao (quando ele estiver disbled, ira acionar essa classe css)*/

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}/* Só irá aplicar se o loading for true */
`;

export const List = styled.ul`
  list-style: none; /* Para tirar as bolinhas do começo */
  margin-top: 30px;

  li {
    padding: 15px 0; /* Espaçamento em cima e embaixo de 15px */
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Vai jogar o titutlo e o nome da esquerda e o detalhe pra direita*/
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    } /* Ele vai aplicar essa instrução se existir um li antes do atual */

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
