import React from 'react';
import { Link } from 'react-router-dom';

export const SidePanel = ({isOpen}) => {
  return (
    <div>
      
      {isOpen && (
        <div>
          <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/messages">
            <i className="bi bi-grid"></i>
            <span>Messages</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/notifications">
            <i className="bi bi-grid"></i>
            <span>Notfications</span>
          </Link>
        </li>
      </ul>
    </aside>

        </div>
      )}
    </div>
      );
};
