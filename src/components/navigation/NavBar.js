import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { Bar } from './navStyle';
import Routes from '../routes/index';

import logo from '../../assets/logo/logo.PNG';

const NavBar = () => {
    
    const { favorites } = useSelector(state => state.favoritesReducer)

    return (
        <Bar>
            <NavLink style={{ transform: "none" }} to={Routes.BeerRoutes.wellcome}>
                <img src={logo} alt="logo" style={{ height: "12vh", width: "150px" }} />
            </NavLink>
            <NavLink activeClassName='is-active' to={Routes.BeerRoutes.browse}>Browse Beers</NavLink>
            <NavLink activeClassName='is-active' to={Routes.BeerRoutes.favorite}>
                Favorite Beers ( {favorites.length ? favorites.length : 0} )</NavLink>
        </Bar>
    )
}

export default NavBar;