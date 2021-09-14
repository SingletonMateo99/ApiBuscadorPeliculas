import React from 'react'
import './Nav.css'
import Logo from './logo.ico'
import SearchBox from './SearchBox'

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <img src={Logo} alt="" />
          <a className="navbar-brand" href="#">NOFLIX</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">TV Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Movies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">New and Popular</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">My List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Watch Again</a>
              </li>

            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
