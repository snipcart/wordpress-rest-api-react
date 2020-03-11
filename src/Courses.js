import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SchoolIcon from '@material-ui/icons/School';

import { useSnipcartState } from './snipcart';
import useFetch from './useFetch';


export default function Courses() {
    const courses = useFetch('/wp-json/wp/v2/courses');

    const isSignedIn = useSnipcartState(state => state.customer.status === 'SignedIn');
  return (
    <List component="nav" aria-label="main mailbox folders">
        {courses && courses.map((course, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary={course.title.rendered} secondary={isSignedIn? `Buy for ${course.price}$` : null} />
          {isSignedIn && (<ListItemSecondaryAction
            className="snipcart-add-item"
            data-item-id={course.id}
            data-item-name={course.title.rendered}
            data-item-price={course.price}
            data-item-url="https://snipcart-wordpress-react.herokuapp.com/wp-json/wp/v2/courses">
            <IconButton edge="end" aria-label="delete">
              <AddShoppingCartIcon />
            </IconButton>
          </ListItemSecondaryAction>)}
        </ListItem>
        ))}
      </List>
  );
}