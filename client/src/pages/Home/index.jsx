import React from "react";

import { Container } from "./styles"
import GridPosts from "../../components/GridPosts";

export default function Home() {
  return (
    <Container>
      <GridPosts />

      <h3>CRÉDITOS A INSPIRAÇÃO DE INTERFACE E POSTS: <a href="https://blog.lsantos.dev">Blog Lucas Santos</a>. ISTO É APENAS UM PROJETO DE ESTUDO.</h3>
    </Container>
  )
}