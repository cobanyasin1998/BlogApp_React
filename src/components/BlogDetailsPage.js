import React from 'react'
import { useParams } from 'react-router-dom';

const BlogDetailsPage = (props) => {
  let { id } = useParams();
  return (
    <div>BlogDetailsPage : { id }</div>
  )
}

export default BlogDetailsPage