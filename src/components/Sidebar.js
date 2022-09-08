import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <h3 className='I'>  <span className="brand-text font-weight-light">AdminLTE 3</span> </h3>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                   
                        <div className="info">
                        <h5 className='J'>  Pathanan Charoenklang </h5>
                        </div>
                   
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                <li className="nav-item">
                                        <a href="/" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                           <h7 className='k'> <p>Home</p> </h7>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/about" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                           <h7 className='F'> <p>About us</p> </h7>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/portfolio" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <h7 className='G'> <p>portfolio</p> </h7>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            
                            
                            
                            </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
    </div>
  )
}
