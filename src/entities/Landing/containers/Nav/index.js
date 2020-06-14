import React, { useRef, useEffect, useState } from 'react'
import Menu from '../Menu';
import { NavLink } from 'react-router-dom';


const Nav = props => {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef();
    navRef.current = scrolled;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 150;
            if (show) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return (
        <nav className={`d-flex justify-between align-center ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                wood<span>Land</span>
            </div>
            <div className="nav-menu">
                <Menu />
            </div>
            <div className="nav-account d-flex justify-between align-center flex-wrap">
                <div className="nav-search d-flex align-center row-reverse nav-account-item">
                    <input type="text" name="search_key" placeholder="Search.." className="search_text" />
                    <i className="material-icons search-btn" aria-hidden="true">search</i>
                </div>
                <div className="nav-profile nav-account-item">
                    <i className="material-icons">perm_identity</i>
                </div>
                <div className="nav-cart nav-account-item">
                    <i className="material-icons">local_mall</i>
                </div>
                <div className="nav-logout nav-account-item">
                    <i className="material-icons">exit_to_app</i>
                </div>
            </div>
        </nav>
    )
}

export default Nav
