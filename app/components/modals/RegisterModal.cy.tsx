import React from 'react';
import RegisterModal from './RegisterModal';
import 'tailwindcss/tailwind.css';
import useRegisterModal from '@/app/hooks/useRegisterModal';

describe('<RegisterModal />', () => {
  let registerModal: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };

  beforeEach(() => {
    registerModal = useRegisterModal.getState();
    useRegisterModal.setState({ isOpen: true });
    cy.mount(<RegisterModal />);

    cy.viewport(600, 800);
  });

  it('should open and close the register modal', () => {
    cy.get('[data-testid="register-modal"]').should('be.visible');
    cy.get('[data-testid="close-button"]').click();
    cy.get('[data-testid="register-modal"]').should('not.exist');
  });

  it('should have password input of type password', () => {
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('should render title with default text', () => {
    cy.get('[data-testid="heading-title"]').should(
      'have.text',
      'Welcome to Airbnb'
    );
  });

  it('should render title with default text on modal name', () => {
    cy.get('[data-testid="modal-title"]').should('have.text', 'Register');
  });

  it('should render subtitle with default text', () => {
    cy.get('[data-testid="heading-subtitle"]').should(
      'have.text',
      'Create an account'
    );
  });

  it('should open register modal and register a user', () => {
    cy.get('#name').type('John Doe');
    cy.get('#email').type('johddn.doe@examdsple.com');
    cy.get('#password').type('password123');
    cy.get('button').eq(1).click();
  });

  it('should empty the name input after register', () => {
    cy.get('button').eq(1).click();
    cy.get('#name').should('have.class', 'border-rose-500');
    cy.get('#email').should('have.class', 'border-rose-500');
    cy.get('#password').should('have.class', 'border-rose-500');
  });
});
