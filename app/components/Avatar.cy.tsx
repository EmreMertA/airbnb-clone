import React from 'react'
import Avatar from './Avatar'
import 'tailwindcss/tailwind.css';

describe('<Avatar />', () => {
  it('should render with default image if src is not provided', () => {
    cy.mount(<Avatar />)
    cy.get('.rounded-full')
      .should('have.attr', 'src', '/_next/image?url=%2Fimages%2Favatar.jpg&w=64&q=75')
      .and('have.attr', 'alt', 'Avatar');
  });

  it('should render with provided src', () => {
    const customSrc = '/avatar.png';
    cy.mount(<Avatar src={customSrc} />)
    cy.get('.rounded-full')
    .should('have.attr', 'src', '/_next/image?url=%2Favatar.png&w=64&q=75')
  });
});