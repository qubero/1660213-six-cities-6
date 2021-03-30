import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../header/header';

const NotFoundScreen = () => {
  return (
    <div className="page page--gray page--login" data-testid="not-found">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1>404. Page not found</h1>
            <Link to="/">Back to homepage</Link>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default NotFoundScreen;
