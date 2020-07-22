import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ user }) {
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
          <ul className="nav navbar-nav navbar-right">
            {!user && (
              <>
                <li>
                  <Link to="/api/register">
                    <i className="glyphicon glyphicon-user"></i> Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/api/login">
                    <i className="glyphicon glyphicon-log-in"></i> Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link to="/api/me">
                    <i className="glyphicon glyphicon-user"></i> {user.name}
                  </Link>
                </li>
                <li>
                  <Link to="/api/logout">
                    <i className="glyphicon glyphicon-log-in"></i> Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
