import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { SignInGoogle } from '../../components/SignIn';
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
  <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">WEEKLY SCHEDULAR</a>
      <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-0 mx-lg-1"><span class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-info" href="#portfolio">APP</span>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><span class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-info" href="#about">ABOUT</span>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><span class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger text-info" href="#contact">CONTACT</span>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><span class="nav-link py-3 px-0 px-lg-3 rounded text-info"><Link to={ROUTES.LANDING}>main page</Link></span>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><span class="nav-link py-3 px-0 px-lg-3 rounded text-info" ><Link to={ROUTES.HOME}>Home</Link></span>
              </li>
              
              <li class="nav-item mx-0 mx-lg-1 text-info"><SignOutButton />
              </li>
          </ul>
      </div>
  </div>
</nav>
 
);

const NavigationNonAuth = () => (
  
  <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
            <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">WEEKLY SCHEDULAR</a>
                <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item mx-0 mx-lg-1"><span class="nav-link py-3 px-0 px-lg-3 rounded text-info"><Link to={ROUTES.LANDING}>Main Page</Link></span>
                        </li>
                        <li class="nav-item mx-0 mx-lg-1 text-info"><SignInGoogle/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
);

export default Navigation;
