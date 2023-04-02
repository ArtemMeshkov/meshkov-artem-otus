import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from '@material-ui/core';
import { FC } from "react";
import React from 'react';

export const Menu: FC<MenuProps> = ({ links = [] }: MenuProps) => 
  <List>
    {
      links.map((item, index) => 
          <Link key={index} to={item.link }>
            <ListItem button>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        )      
    }
  </List>

export interface MenuLinkProps {
  title: string;
  link: string;
}

export interface MenuProps {
  links: MenuLinkProps[];
}