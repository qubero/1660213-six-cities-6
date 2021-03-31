import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import OfferHost from './offer-host';

it(`Render 'OfferHost'`, () => {
  const history = createMemoryHistory();
  const mockData = {
    description: `Design interior in most sympathetic area!`,
    host: {
      id: 25,
      isPro: true,
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`
    }
  };

  render(
      <Router history={history}>
        <OfferHost
          host={mockData.host}
          description={mockData.description}
        />
      </Router>
  );

  expect(screen.getByText(`Meet the host`)).toBeInTheDocument();
  expect(
      screen.getByAltText(`Host avatar`)
  ).toHaveAttribute(`src`, `${mockData.host.avatar}`);
  expect(screen.getByText(`${mockData.host.name}`)).toBeInTheDocument();
  expect(screen.getByText(`${mockData.description}`)).toBeInTheDocument();
});
