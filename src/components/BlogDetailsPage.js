import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import BlogDetailsItem from "./BlogDetailsItem";

const BlogDetailsPage = (props) => {
  let { id } = useParams();
  return <BlogDetailsItem {...props.blog} />;
};

const mapStateToProps = (state, props) => {
  let { id } = useParams();
  return {
    blog: state.blogs.find((blog) => {
      return blog.id === id;
    }),
  };
};

export default connect(mapStateToProps)(BlogDetailsPage);
