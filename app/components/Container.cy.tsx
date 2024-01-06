import React from 'react';
import Container from './Container';
import 'tailwindcss/tailwind.css';

describe('<Container />', () => {
  it('renders children content within the container', () => {
    const childContent = 'This is the content inside the container.';

    cy.mount(<Container>{childContent}</Container>);

    cy.get('[data-test-id="container"]').should('contain', childContent);
  });
  it('renders the container with expected classes and styles', () => {
    cy.mount(<Container>Some content</Container>);

    cy.get('[data-test-id="container"]')
      .should('have.css', 'max-width', '2520px')
      .and('have.class', 'mx-auto')
      .and('have.class', 'xl:px-20')
      .and('have.class', 'md:px-10')
      .and('have.class', 'sm:px-2')
      .and('have.class', 'px-4');
  });
});
