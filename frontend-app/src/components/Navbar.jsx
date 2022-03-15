import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logoptba.png';

function Navbar(){
    return(
        <div className="navbar navbar-expand-lg bg-light shadow">
            <div className="container">
                <ul className="nav">
                    <img src={logo} alt="logoptba" style={{ height: "40px" }}/>
                    <li>
                        <Link to="/" className="nav-link">Beranda</Link>
                    </li>
                    <li>
                        <Link to="manajemen-buku" className="nav-link">Manajemen Buku</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar