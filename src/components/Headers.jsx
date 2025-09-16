import React from "react";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <h1 className="site-logo">🍽️ My Recipes</h1>
        <nav className="nav-menu">
          <a href="#recipes" className="nav-link">Recipes</a>
          <a href="#add" className="nav-link">Add Recipe</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
