import React from 'react';
import Button from './Button';
import { AiFillAlert } from 'react-icons/ai';
import 'tailwindcss/tailwind.css';

describe('<Button />', () => {
  it('should render with default props', () => {
    const handleClick = cy.stub();
    cy.mount(<Button label='Click me' onClick={handleClick} />);
    cy.get('button').should('have.text', 'Click me');
    cy.get('button').should('have.class', 'bg-rose-500'); 
    cy.get('button').should('not.have.class', 'disabled');
  });

  it('should handle disabled state', () => {
    const handleClick = cy.stub();
    cy.mount(<Button label='Disabled' onClick={handleClick} disabled />);
    cy.get('button').should('have.attr', 'disabled');
    cy.get('button').should('have.css', 'cursor', 'not-allowed');
    cy.get('button').should('have.css', 'opacity', '0.7');
  });

  it('should handle outline style', () => {
    const handleClick = cy.stub();
    cy.mount(<Button label='Outline' onClick={handleClick} outline />);
    cy.get('button').should('have.class', 'bg-white');
    cy.get('button').should('have.class', 'border-black');
    cy.get('button').should('have.class', 'text-black');
  });

  it('should handle small size', () => {
    const handleClick = cy.stub();
    cy.mount(<Button label='Small' onClick={handleClick} small />);
    cy.get('button').should('have.class', 'py-1');
    cy.get('button').should('have.class', 'text-sm');
    cy.get('button').should('have.class', 'font-light');
    cy.get('button').should('have.class', 'border-[1px]');
  });

  it('should render an icon if provided', () => {
    const handleClick = cy.stub();
    cy.mount(<Button label='Icon' onClick={handleClick} icon={AiFillAlert} />);
    cy.get('button').find('svg').should('exist');
  });

  it('should trigger the onClick callback when clicked', () => {
    const handleClick = cy.stub().as('handleClick');
    cy.mount(<Button label="Click me" onClick={handleClick} />);
    cy.get('button').click();
    cy.get('@handleClick').should('have.been.calledOnce');
  });
});
