import { useState } from "react";

const Blog = ({ blog ,handleLike,handleDelete}) => {
  const [visible, setVisible] = useState(false);
  
 

  const changevisible = () => {
    setVisible(!visible);
  };
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 10,
    paddingBottom: 5,
    
  };
  const label = !visible ? "view" : "hide";
  return (
    <div style={blogStyle}>
      {blog.title} <button
      
 
      onClick={changevisible}> {label} </button> <br />
      {visible && (
        <div>
          {blog.url} <br />
          Likes: {blog.likes} <button onClick={ ()=>handleLike(blog)}>like</button><br />
          {blog.author} <br />
          <button style={{
          backgroundColor: 'burlywood',
          borderRadius: '6px'
          }}
          onClick={()=>handleDelete(blog)}
          >remove</button>
        </div>
      )}
    </div>
  );
};

export default Blog;

