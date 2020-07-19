import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/api/posts">
              <i className="navbar-brand">BlogPost</i>
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/api/posts">Home</Link>
            </li>
            <li>
              <Link to="/api/create">Create a Post</Link>
            </li>
            <li>
              <Link to="/api/chat">Our Chat</Link>
            </li>
            <li>
              <Link to="/api/pomodoro">Pomodoro Clock</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
