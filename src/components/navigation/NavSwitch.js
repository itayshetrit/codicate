import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Routes from '../routes/index';
import Browse from '../beers/components/Browse';
import Favorites from '../beers/components/Favorites';
import Loading from '../loads/Loading';


const NavSwitch = () => {
  return (
    <Switch>
        <Route path={Routes.BeerRoutes.browse} component={Browse}></Route>
        <Route path={Routes.BeerRoutes.favorite} component={Favorites}></Route>
        <Route path={Routes.BeerRoutes.wellcome} component={Loading}></Route>
        <Redirect from="/" to={Routes.BeerRoutes.wellcome} />
    </Switch>
  )
}

export default NavSwitch;