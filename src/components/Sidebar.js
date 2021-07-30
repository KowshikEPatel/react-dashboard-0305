import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                <hr className="sidebar-divider my-0"></hr>

                <li className="nav-item">
                    <div className="nav-link">
                    <Link to="/">
                            <i className="fas fa-fw fa-tachometer-alt"></i>
                            <span className="nav-link">Dashboard</span>
                        </Link>
                    </div>
                           
                </li>
            <li>
                <Dropdown className="nav-link">
                    <Dropdown.Toggle  id="dropdown-basic">
                        <i className="fas fa-user"></i>
                        <span>Users</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><Link to="/userlist"   >User List</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/usercreate" >User Create</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/userlist"   >User Edit</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
            <li>
                <Dropdown className="nav-link">
                    <Dropdown.Toggle  id="dropdown-basic">
                        <i className="fas fa-air-freshener"></i>
                        <span>Products</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item ><Link to="/productlist"   >Product List</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/productcreate" >Product Create</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to="/productlist"   >Product Edit</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </li>
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                    <i className="fas fa-air-freshener"></i>
                        <span>Products</span></a>
                </li>
                <hr className="sidebar-divider"></hr>
            </ul>
        </>
    )
}
