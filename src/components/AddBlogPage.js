import React from "react";
import BlogForm from "./BlogForm";
import { connect } from "react-redux";
import {addBlog} from '../actions/blog';
const AddBlogPage = (props) => {
  return (
    <div>
      <h1>
        Add Blog
        <BlogForm onSubmit={(blog) => {
            props.dispatch(addBlog(blog));
        }} />
      </h1>
    </div>
  );
};

export default connect()(AddBlogPage);
