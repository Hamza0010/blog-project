import "./App.css";
import Header from "./pages/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import Posts from "./components/posts/posts";
import ViewPost from "./components/posts/viewpost";
import { useState, useEffect } from 'react'
import { Context } from "./context.jsx";
import AddPost from "./components/posts/addpost";
import EditPost from "./components/posts/editpost";
function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "test",
      email: "test@gmail.com",
      password: "123123"
    }
  ])
  const [currentUser, setCurrentUser] = useState([])
  const url = "https://jsonplaceholder.typicode.com/posts"
  const [posts, setPosts] = useState([])
  const getposts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }
  useEffect(() => {
    getposts()
  }, [url]
  )
  return (
    <Router>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Context.Provider value={{ users, setUsers, currentUser, setCurrentUser, posts, setPosts }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/post/:postid" element={<ViewPost />} />
          <Route path="/post/edit/:postid" element={<EditPost />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
}


export default App;
