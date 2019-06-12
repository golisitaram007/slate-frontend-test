import React from 'react';
import { Link, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    const currentRoute = props.location.pathname.split('/')[1];
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">{ props.title }</Link>
            <div className="" id="">
                <ul className="navbar-nav mr-auto">
                    <li className={"nav-item" + currentRoute === '' ? 'active' : ''}>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className={"nav-item" + currentRoute === 'create' ? 'active' : ''}>
                        <Link className="nav-link" to="/create">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar); 
