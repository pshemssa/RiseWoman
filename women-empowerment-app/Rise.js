// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [mentors, setMentors] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/mentors')
      .then(res => setMentors(res.data))
      .catch(err => console.error(err));

    axios.get('http://localhost:5000/api/resources')
      .then(res => setResources(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Women Empowerment Platform</h1>
      <h2>Mentors</h2>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor._id}>{mentor.name}</li>
        ))}
      </ul>
      <h2>Resources</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource._id}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
