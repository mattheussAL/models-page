import React from 'react';

import { LeftBar, Menu, SocialIcons } from './styles';

// Material Icons
import SortIcon from '@material-ui/icons/Sort';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

function MenuSocial() {
  return (
   <>
    <LeftBar>
     <Menu>
      <SortIcon />
     </Menu>

     <SocialIcons>
      <GitHubIcon />
      <LinkedInIcon />
      <ChangeHistoryIcon />
     </SocialIcons>
    </LeftBar>
   </>
  );
}

export default MenuSocial;