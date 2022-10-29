import React from "react";

import { Container, Thumb } from "./styles";

export default function Posts(props) {
  return (
    <Container href={props.link}>
      <Thumb image={props.thumb} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </Container>
  )
}