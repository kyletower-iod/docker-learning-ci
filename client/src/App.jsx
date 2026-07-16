import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // We fetch from localhost:4000 because this runs in the user's BROWSER
        const res = await fetch('http://localhost:4000/');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>All Blogs - Updated via CI/CD</h1>
        {blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;