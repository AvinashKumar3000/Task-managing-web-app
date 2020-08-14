import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div class="masthead bg-primary text-white text-center">
  <div class="container d-flex align-items-center flex-column">
      <h1 class="masthead-heading mb-0">YOU HAD SUCCESSFULLY SIGN OUT</h1>
      <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
      </div>
      <p class="pre-wrap masthead-subheading font-weight-light mb-0">thanks for using our application
      </p>
  </div>
</div>
);


const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set(
          {
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          },
          { merge: true },
        );
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    

    return (<div>
      
      <span class="nav-link py-3 px-0 px-lg-3 rounded text-info" onClick={this.onSubmit}> Sign In</span>

    </div>
      
    );
  }
}


const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);


export default SignInPage;

export { SignInGoogle };
