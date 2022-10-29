import React from "react";

import {Nav} from "./styles"
import NavList from "../NavList"

export default function Navbar (props) {
  return (
    <Nav>
      <NavList links={props.links}/>
    </Nav>
  )
}