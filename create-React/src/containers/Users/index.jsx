import React from "react";

import {
  Container,
  Imagen,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,P,
} from "./styles";

import Deliver from "../../assets/burger back.svg";
import Trash from "../../assets/trash.svg";
const User = () => {
const users = [{}]

  return (
    <Container>
      <Imagen src={Deliver} alt="logo-imagem"></Imagen>
      <H1>Pedido!</H1>
      <ContainerItens>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="lanche"></Input>
        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="name-cliente"></Input>
        <div>
          {users.map((user)=> (
           <User Key={user.id}>
               <P>{users.order}</P> - <P>{users.clienteName}</P>
               <Button><img src={Trash} alt ="lata de lixo "/></Button>
           </User>
))}

        </div>
        <Button>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default User;
