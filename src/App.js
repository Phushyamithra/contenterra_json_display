import React from 'react';
import Card from './components/Card.js';
import Navbar from './components/Navbar.js';
import { useState, useEffect } from 'react';
import './App.css'


const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then(response => response.json())
      .then(data => {
        setPosts(data.data.children);
      })
      .catch(error => {
        console.error('Error fetching the data:', error);
      });
  }, []);
  // const redditData = data;
  return (
    <div>
      <Navbar />
      <div className="allCards">

        {
          posts.map((post, index) => {
            return (<Card key={index} posts={post} />);

          })
        }
      </div>
    </div>
  );
};

export default App;
