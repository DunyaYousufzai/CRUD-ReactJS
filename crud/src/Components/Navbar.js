import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <NavLink className="navbar-brand text-dark " to="/">Read All Agendas</NavLink>
          <NavLink className="navbar-brand text-warning" to="/add" >Add Agenda</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar;