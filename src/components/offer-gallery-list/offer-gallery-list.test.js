import React from 'react';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router';
import OfferGalleryList from './offer-gallery-list';

const mockGallery = [
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
  `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
];

it(`Render 'OfferGalleryList'`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <OfferGalleryList images={mockGallery} />
      </Router>
  );

  expect(screen.getByTestId(`property-gallery`)).toBeInTheDocument();

  for (const item of mockGallery.slice(0, 6)) {
    expect(screen.getByTestId(item)).toBeInTheDocument();
  }
});
