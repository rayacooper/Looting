import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    <div>
        <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/Bad'><li>Bad</li></Link>
            <Link to='/Good'><li>Good</li></Link>
            <Link to='/DIY'><li>DIY</li></Link>
        </ul>
    </div>
}

export default withRouter(NavBar);