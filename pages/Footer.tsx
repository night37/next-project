import React from 'react'

export function Footer() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container ps-5">
                <ul className="navbar-nav w-100 mb-2 mb-lg-0">
                    <div className="row w-100 d-flex">
                        <li className="nav-item col-xl-1 col-sm-6">
                            <a className="nav-link" href='#'>Contact</a>
                        </li>
                        <li className="nav-item col-xl-2 col-sm-6">
                            <a className="nav-link" href='#'>Mentions légales</a>
                        </li>
                        <li className="nav-item col-xl-3 col-sm-6">
                            <a className="nav-link" href='#'>Politique de confidentialité</a>
                        </li>
                        <li className="nav-item col-xl-2 col-sm-6">
                            <a className="nav-link" href='#'>Plan du site</a>
                        </li>
                        <li className="nav-item col-xl-3 offset-xl-1 offset-sm-6">
                            <a className="nav-link">© Trans-garonna 2022</a>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>

    )
}

