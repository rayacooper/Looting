import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Bad'>Bad</Link></li>
                <li><Link to='/Good'>Good</Link></li>
                <li><Link to='/DIY'>DIY</Link></li>
            </ul>
        </div>
    )
    
}

export default withRouter(NavBar);