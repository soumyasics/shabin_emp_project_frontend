import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top  p-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Hermes Systems</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Hermes Systems</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body ">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <Link to="/signup" class="nav-link">Signup</Link>                                    
                                </li>
                                <li class="nav-item">
                                    <Link to='#' class="nav-link">Abou Us</Link>
                                </li>
                                <li class="nav-item dropdown ">
                                    <Link  class="nav-link dropdown-toggle"  to="#" role='button' data-bs-toggle="dropdown" aria-expanded="false">Login</Link>
                                    <ul class="dropdown-menu " >                                                                              
                                        <li><Link to="/login" class='dropdown-item'>Employee</Link></li>
                                        <li><Link to='/hrlogin' class="dropdown-item">HR</Link></li>                                        
                                        <li><Link to='/adminlogin' class="dropdown-item">Admin</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )
}
export default Home