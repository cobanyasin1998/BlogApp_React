
const blogState = [];

const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];
    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    default:
      return state;
  }
};

export default blogReducer