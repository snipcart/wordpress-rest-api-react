import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Courses from './Courses';
import Posts from './Posts';

function App() {
  return (
    <Container maxWidth="sm">
      <header>
        <Typography variant="h2">
          Online courses for the API enthusiast
        </Typography>
      </header>
      <section>
        <Typography variant="h3">
          Courses from top teachers
        </Typography>
        <Courses />
      </section>
      <section>
        <Typography variant="h3">
          From our blog
        </Typography>
        <Posts />
      </section>
    </Container>
  );
}

export default App;
