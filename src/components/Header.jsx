import React from "react";

const Header = () => {
  return (
    <header>
        <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <span className="sr-only">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="white" d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"/></svg>
            </span>
        </button>
        <nav>
        <div className="logo">
            <strong>M.S</strong>
            <span>Coaching Pro</span>
        </div>
        <ul id="primary-navigation">
            <li aria-hidden="true">Accueil</li>
            <li aria-hidden="true">Programmes</li>
            <li aria-hidden="true">A propos</li>
            <li aria-hidden="true">Contact</li>
        </ul>
        </nav>
    </header>
  )
}
  
export default Header;