import React from 'react';
import EmptyState from './EmptyState';
import 'tailwindcss/tailwind.css';
import MockNextRouter from './MockRouter';

describe('<EmptyState />', () => {
  it('renders the empty state with default title and subtitle', () => {
    cy.mount(
      <MockNextRouter>
        <EmptyState />
      </MockNextRouter>
    );
    cy.get('[data-test-id="empty-state"]')
      .should('include.text', 'No results found')
      .and('include.text', 'Try changing or removing search filters');
  });
  it('renders with custom title and subtitle', () => {
    const customTitle = 'Something went wrong';
    const customSubtitle = 'Please try again later.';

    cy.mount(
      <MockNextRouter>
        <EmptyState title={customTitle} subtitle={customSubtitle} />
      </MockNextRouter>
    );

    cy.get('[data-test-id="empty-state"]').should('include.text', customTitle);
    cy.get('[data-test-id="empty-state"]').should(
      'include.text',
      customSubtitle
    );
  });

  it('renders the reset button when showReset is true', () => {
    cy.mount(
      <MockNextRouter>
        <EmptyState showReset />
      </MockNextRouter>
    );

    cy.get('[data-test-id="empty-state"] button')
      .should('have.text', 'Reset filters')
      .and('be.visible');
  });
});
