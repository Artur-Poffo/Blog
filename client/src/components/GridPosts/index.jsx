import React, { useEffect, useState } from "react";

import { Grid } from "./styles"
import Posts from "../Posts";

export default function GridPosts() {
  const [postArray, setPostArray] = useState([])

  useEffect(() => {

    fetch("/api")
      .then(res => res.json())
      .then(data => {
        setPostArray(data)
      })

  }, [])

  return (
    <Grid>
      {postArray.map((post, index) => {
        return (
          <Posts title={post.title} desc={post.desc} thumb={post.thumb} link={post.link} key={index} />
        )
      })}
    </Grid>
  )
}