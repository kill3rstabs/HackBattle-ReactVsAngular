import React from 'react'
import { SinglePost } from "./SinglePost";
export const P = ({post}) => {
  return (
    <div>
        todos.map((post, index) => (
            <SinglePost post = post/>
        ))
    </div>
  )
}




