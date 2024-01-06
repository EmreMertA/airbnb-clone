import React from 'react';
import HeartButton from './HeartButton';
import MockNextRouter from './MockRouter';
import 'tailwindcss/tailwind.css';

describe('<HeartButton />', () => {
  it('renders with unfilled heart icon when currentUser is null', () => {
    cy.mount(
      <MockNextRouter>
        <HeartButton listingId='123' currentUser={null} />
      </MockNextRouter>
    );

    cy.get('[data-testid="heart-button"]')
      .find('svg')
      .should('have.class', 'fill-neutral-500/70');
  });
});
