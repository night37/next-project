import React from 'react'
import Image from 'next/image'


export function Header() {
    return (
        <nav className="navbar navbar-expand-lg p-0">
            <div className="container">
                <a className="navbar-brand p-0" href="#">
                    <Image className="header-logo" src="/assets/images/logo2.png" alt="logo" width="404" height="102" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="ml-2 collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Le projet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Le calendrier</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Les enjeux</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

