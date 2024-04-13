import React (useState) from "react";

import {
  Container,
  Imagen,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,

} from "./styles";

import Burger from "../../assets/burger Front.svg";
import { useState } from "react";

const App = () => {
  const [comands, setComands] = useState([]);
  const [order, setOrder ]= useState();
  
function addNewOrder() {

  console.log("Fui  chamado")
}


  return (
    <Container>
      <Imagen src={Burger} alt="logo-imagem"></Imagen>
      <H1>Faça seu pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="lanche"></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="name-cliente"></Input>
      
        <Button onClick={}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
