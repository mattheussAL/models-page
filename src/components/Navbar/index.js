import React from 'react';

import { Nav, Logo, Routes, Icons} from './styles';

// Icons Material
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Navbar() {
  return (
   <>
    <Nav>
     <Logo>Models</Logo>

     <Routes>
      <ul>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
       <li>Shopping</li>
      </ul>

      <Icons>
       <SearchIcon />
       <ShoppingCartIcon />
       <FavoriteBorderIcon />
      </Icons>
     </Routes>


    </Nav>
   </>
  );
}

export default Navbar;