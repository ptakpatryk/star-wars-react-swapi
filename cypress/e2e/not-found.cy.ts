import { before } from 'cypress/types/lodash';

describe('404 - page not found', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/unknown');
  });

  it('should show error fallback if route doesnt exist', () => {
    cy.get('[data-testid=error-card]');
  });

  it('should refresh button route to the home page', () => {
    cy.get('[data-testid=refresh-btn]').click();
    cy.location('pathname').should('eq', '/');
  });
});
