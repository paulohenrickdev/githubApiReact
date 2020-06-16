import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
