import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Copyright from './Copyright';
import Courses from './Courses';
import Posts from './Posts';
import { useSnipcartState } from './snipcart';

function App() {
  const isSignedIn = useSnipcartState(state => state.customer.status === 'SignedIn');

  function signOut(ev) {
    ev.preventDefault();
    window.Snipcart.api.customer.signout();
  }

  return (
    <Container maxWidth="sm">
      <header>
        <Typography variant="h2">
          Online courses for the API enthusiast
        </Typography>
        {isSignedIn ? (
          <p>
            <button onClick={signOut}>
              Signout
            </button>
          </p>
        ) : (
          <p>
            <button className="snipcart-customer-signin">
              Signin to purchase our courses
            </button>
          </p>
        )}
      </header>
      <section>
        <Typography variant="h4">
          Courses from top teachers
        </Typography>
        <Courses />
      </section>
      <section>
        <Typography variant="h4">
          From our blog
        </Typography>
        <Posts />
      </section>
      <footer style={{marginTop: '3em'}}>
        <Copyright />
      </footer>
    </Container>
  );
}

export default App;
