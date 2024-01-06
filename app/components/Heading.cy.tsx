import React from 'react';
import Heading from './Heading';
import 'tailwindcss/tailwind.css';

describe('<Heading />', () => {
  it('renders with default styling and left alignment', () => {
    cy.mount(<Heading title='Welcome' subtitle='Explore the possibilities.' />);

    cy.get('[data-testid="heading-title"]')
      .should('have.text', 'Welcome')
      .and('have.css', 'text-align', 'start');
    cy.get('[data-testid="heading-subtitle"]').should(
      'have.text',
      'Explore the possibilities.'
    );
  });
  it('renders with centered alignment when center prop is true', () => {
    cy.mount(
      <Heading title='Welcome' subtitle='Explore the possibilities.' center />
    );

    cy.get('[data-testid="heading-title"]').should(
      'have.css',
      'text-align',
      'center'
    );
  });
  it('renders without a subtitle when subtitle prop is not provided', () => {
    cy.mount(<Heading title='Welcome' />);

    cy.get('[data-testid="heading-title"]').should('have.text', 'Welcome');
    cy.get('[data-testid="heading-subtitle"]').should('not.be.visible');
  });
});
