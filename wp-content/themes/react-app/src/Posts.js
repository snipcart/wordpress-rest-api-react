import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import useFetch from './useFetch';

export default function Posts() {
    const posts = useFetch('http://localhost/wp-json/wp/v2/posts');
  return (
    <Grid container spacing={2}>
      {posts && posts.map((post, index) => (
      <Grid item xs={4} key={index}>
        <Card>
            <CardContent>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                <Typography
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{__html: post.content.rendered}} />
            </CardContent>
        </Card>
      </Grid>
      ))}
    </Grid>
  );
}