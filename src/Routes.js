import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import Bad from './Components/Bad/Bad';
import Good from './Components/Good/Good';
import DIY from './Components/DIY/DIY';

export default (
    <Switch>
        <Route component={Bad} path='/Bad' />
        <Route component={Good} path='/Good' />
        <Route component={DIY} path='/DIY'/>
        <Route component={Home} path='/' />
    </Switch>
    
)