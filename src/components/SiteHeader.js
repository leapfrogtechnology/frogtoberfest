import React, { Fragment } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import 'assets/css/style.css';

import Logo from 'assets/images/logo.svg';

const SiteHeader = () => {
    return (
        <Fragment>
            <header className='header pt-6x pt-md-12x'>
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">

                        <div className="logo">
                            <figure>
                                <img src={Logo} alt="" />
                            </figure>
                        </div>
                        <nav className='nav p-6x pt-10x p-md-0x'>
                            <ul className='d-flex flex-column flex-md-row gap-x-md-12x gap-y-6x'>
                                <li className='nav__item'><a className='nav__link' href="#participation">Participation</a></li>
                                {/* <li className='nav__item'><Link className='nav__link' to="/leaderboard">Leaderboard</Link></li> */}
                                <li className='nav__item'><Link className='nav__link' to="/checker">Checker</Link></li>
                                <li className='nav__item'><a className='nav__link' href="#swag">SWAG</a></li>
                                <li className='nav__item'><a className='nav__link' href="#faq">FAQs</a></li>
                            </ul>

                            <button className="menu-close d-md-none">
                                <span className="bar"></span>
                                <span className="bar"></span>
                            </button>
                        </nav>

                        <button className="menu-toggle">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default SiteHeader;
