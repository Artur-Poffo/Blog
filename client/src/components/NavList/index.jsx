import React from "react";

import {List} from "./styles"

export default function NavList(props) {
  return (
    <List>
      {props.links.map((link, index) => {
        return (
          <li key={index} >{link}</li>
        )
      })}
    </List>
  )
}