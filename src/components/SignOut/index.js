import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <div>
    <span class="nav-link py-3 px-0 px-lg-3 rounded "   onClick={firebase.doSignOut}>Sign Out</span>
  
  </div>
);

export default withFirebase(SignOutButton);
