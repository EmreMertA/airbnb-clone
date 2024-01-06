import React from 'react'
import Loader from './Loader'

describe('<Loader />', () => {
  it('renders the PuffLoader component', () => {
    cy.mount(<Loader />);
  
    cy.get('[data-test-id="loader"]')
      .should('exist')
      .find('PuffLoader')
      .should('have.length', 0);
  }); 
})