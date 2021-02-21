import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offerCards as offers} from './mocks/offers';

ReactDOM.render(
    <App
      offers={offers}
    />,
    document.querySelector(`#root`)
);
