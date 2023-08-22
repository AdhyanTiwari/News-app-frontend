import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import newscontext from '../contexts/newscontext'

function Navbar() {
    const a = useContext(newscontext);
    const logout=()=>
    {
        a.setprofile(false);
        localStorage.setItem("token","");
        localStorage.setItem("status",false)
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="navbar-brand d-flex" href="#"><b>A-News</b>  &nbsp; &nbsp;
                    <div style={{ border: "1px solid white", minHeight: "70%", }}></div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </div>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/business"}>Business</Link></li>
                                <li><Link className="dropdown-item" to={"/sports"}>Sports</Link></li>
                                <li><Link className="dropdown-item" to={"/health"}>Health</Link></li>
                                <li><Link className="dropdown-item" to={"/science"}>Science</Link></li>
                                <li><Link className="dropdown-item" to={"/entertainment"}>Entertainment</Link></li>
                                <li><Link className="dropdown-item" to={"/technology"}>Technology</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle" to={"/"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Channels
                            </div>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to={"/aajtak"}>Aaj Tak</Link></li>
                                <li><Link className="dropdown-item" to={"/zeenews"}>Zee News</Link></li>
                                <li><Link className="dropdown-item" to={"/bbcnews"}>BBC News</Link></li>
                                <li><Link className="dropdown-item" to={"/abcnews"}>ABC News</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/saved"}>Saved</Link>
                        </li>
                    </ul>
                    <div className=" mx-3" style={(!a.profile ? { display: "none" } : {})} role="search">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button className="btn btn-success  rounded-circle" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    {/* <i class="fa-solid fa-user"></i> */}
                                    <b>A</b>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="/signup" onClick={logout}>Logout</a></li>
                                    <li><Link className="dropdown-item" to={"/changepassword"}>Change password</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div  role="search" style={(!a.profile ? {} : { display: "none" })}>
                        <Link to={"/signup"} style={{ textDecoration: "none" }}> <button className='btn btn-outline-light btn-sm mx-1'>Sign Up</button></Link>
                        <Link to={"/signin"} style={{ textDecoration: "none" }}> <button className='btn btn-outline-light btn-sm mx-2'>Sign In</button></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar