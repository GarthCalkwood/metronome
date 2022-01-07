import React from 'react';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';

const Sidebar = ( {drawer, isOpen, onClose} ) => {
  return(
    <>
      <Drawer
        variant="temporary"
        anchor="left"
        open={isOpen}
        onClose={onClose}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {drawer}
      </Drawer>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          sx={{
            display: { sm: 'none', md: 'block' },
          }}
          open
        >
          {drawer} 
        </Drawer>
      </Hidden>
    </>
  )
}

export default Sidebar