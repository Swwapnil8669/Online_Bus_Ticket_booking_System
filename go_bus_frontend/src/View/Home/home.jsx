import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1>Welcome to Home Page</h1>
        <p>This is the homepage of our application.</p>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/profile">Go to Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
