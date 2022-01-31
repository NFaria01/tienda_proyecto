import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';


const Listas = () => {
  return (
    <div>
      <List component='nav'>
            <ListItem button>
                <ListItemIcon>
                   
                </ListItemIcon>
                <ListItemText primary='mi primer elemento'/>
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    
                </ListItemIcon>
                <ListItemText primary='mi segundo element'/>
            </ListItem>
            <Divider />

      </List>
    </div>
  )
}

export default Listas
