import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import useFetch from './useFetch';

export default function Courses() {
    const courses = useFetch('/wp-json/wp/v2/courses');
  return (
    <List component="nav" aria-label="main mailbox folders">
        {courses && courses.map((course, index) => (
        <ListItem key={index}>
          <ListItemText primary={course.title.rendered} />
        </ListItem>
        ))}
      </List>
  );
}