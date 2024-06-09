import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
              <nav class="navbar bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src="https://fisat.ac.in/wp-content/themes/fisat2022/assets/logo.png" alt="Bootstrap" width="50" height="54"/>
      <img src="https://fisat.ac.in/wp-content/themes/fisat2022/assets/testcopy.png" alt="Bootstrap" width="500" height="54"/>
      
    </a>
  </div>
</nav>
  
<nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/add">AddStudents</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search here</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">ViewDetails </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar