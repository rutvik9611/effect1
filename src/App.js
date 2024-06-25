// src/App.js

import './App.css';
import { Routes, Route } from "react-router-dom";
import Posts from './Component/Posts';
import Comment from './Component/Comment';
import Albums from './Component/Albums';
import Photo from './Component/Photo';
import Todo from './Component/Todo';
import User from './Component/User';
import Header from './Component/Header';
import Api1 from './Component/Api1';


const menu = [
  {
    name: 'Posts',
    route: 'posts'
  },
  {
    name: 'Comment',
    route: 'comment'
  },
  {
    name: 'Albums',
    route: 'album'
  },
  {
    name: 'Photo',
    route: 'photo'
  },
  {
    name: 'Todo',
    route: 'todo'
  },
  {
    name: 'User',
    route: 'user'
  },
  {
    name: 'Api',
    route: 'api'
  },
];

function App() {
  return (
    <>
      <Header demo={menu} />
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/album" element={<Albums />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/user" element={<User />} />
        <Route path="/api" exact  element={<Api1 />} />
      </Routes>
    </>
  );
}

export default App;
