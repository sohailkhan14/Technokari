import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


   const Nav = () => {
  const auth = localStorage.getItem('user');                                        
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')        
  }
  return (
    <div>
    
      
       <ul className='nav-ul'>
   <li>
       <a href='#'><span className='techno'>Techno</span>  <span className='kari'>kari </span></a>

   </li>
        <Link to = '/index' > </Link>
        <li><Link to = '/services' > Services </Link></li>
        <li> <Link to = '/case-studies' > Case Studies </Link></li>
       <li><Link to = '/about' > About </Link></li> 
        <li><Link to = '/blog' > Blog </Link></li>
        <li><Link to = '/contact' > Contact </Link></li>

        <li><Link to = '/contact'> <Button variant="primary">Get a Proposal  </Button> </Link> </li>

      </ul> 
    </div>
  )
}
export default Nav;