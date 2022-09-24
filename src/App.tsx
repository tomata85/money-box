import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface IPost {
  id: number;
  title: string;
}

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
   useEffect(() => {
      fetch('http://localhost:3000/posts/')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{ posts.map(post => {
          return <li>{post.title}</li>
        }) }</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
