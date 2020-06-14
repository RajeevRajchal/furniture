import React from 'react'
import { Link } from "react-scroll";
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const front_navbar_items = [
        { name: "Home", icon: "", path: "home" },
        { name: "Whowe", icon: "", path: "whowe" },
        { name: "Furniture", icon: "", path: "furniture" },
        { name: "Know Woods", icon: "", path: "knowwood" },
    ]
    return (
        <div className="menu-items d-flex justify-between align-center flex-wrap">

            {
                front_navbar_items.map((item, i) => (
                    <Link
                        className="menu-item"
                        activeClass="active"
                        to={item.path}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        {item.name}
                    </Link>
                    
                ))
                
            }
            < NavLink to="/shop" className="menu-items"> Shop </NavLink>
        </div>
    )
}

export default Menu
