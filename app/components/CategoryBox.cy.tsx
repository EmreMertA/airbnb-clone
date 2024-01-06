import React from 'react';
import CategoryBox from './CategoryBox';
import 'tailwindcss/tailwind.css';
import MockNextRouter from './MockRouter';
import { FaPaintBrush } from 'react-icons/fa';
describe('<CategoryBox />', () => {
  it('renders with default styling', () => {
    cy.mount(
      <MockNextRouter>
        <CategoryBox label='Design' icon={FaPaintBrush} />
      </MockNextRouter>
    );
    cy.get('[data-test-id="category-box"]')
      .should('have.text', 'Design')
      .should('have.class', 'border-transparent')
      .should('have.class', 'text-neutral-500');
  });

  it('renders with selected styling', () => {
    cy.mount(
      <MockNextRouter>
        <CategoryBox label='Design' icon={FaPaintBrush} selected />{' '}
      </MockNextRouter>
    );
    cy.get('[data-test-id="category-box"]')
      .should('have.class', 'border-b-neutral-800')
      .should('have.class', 'text-neutral-800');
  });
});
