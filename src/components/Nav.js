import React from 'react';
import {Link} from 'react-router-dom'

function Nav(props){
    return (
      <div id="nav">
        {props.squad.forEach(member => {
            <button className='nav-button' onClick={props.handleNavClick}><div><Link to={`/${member.name}`} member={member}>{member.name}</Link></div></button>
        })}
      </div>
    );
  }
    
  export default Nav;