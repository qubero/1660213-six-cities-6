import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import OfferServicesList from './offer-services-list';

it(`Render 'OfferServicesList'`, () => {
  const history = createMemoryHistory();
  const mockServices = [`Laptop friendly workspace`];

  render(
      <Router history={history}>
        <OfferServicesList services={mockServices} />
      </Router>
  );

  expect(screen.getByText(`What's inside`)).toBeInTheDocument();

  for (const item of mockServices) {
    expect(screen.getByTestId(item)).toBeInTheDocument();
  }
});
