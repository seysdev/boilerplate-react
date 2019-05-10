import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './header.component.scss';

function Header() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Logo
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export {
  Header
}
