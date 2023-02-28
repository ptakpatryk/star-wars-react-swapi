describe('home page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  context('characters list', () => {
    it('should show loader first when fetchin data', () => {
      cy.get('[data-testid=page-loader]').should('be.visible');
    });

    it('should loader disappear when characters are fetched', () => {
      cy.get('[data-testid=characters-list]');
      cy.get('[data-testid=page-loader]').should('not.exist');
    });

    it('should planet of a character be loaded after showing the card', () => {
      cy.get('[data-testid=characters-list]');
      cy.get('[data-testid=page-loader]').should('not.exist');
    });

    it('should planet of a character be loaded after showing the card', () => {
      cy.get('[data-testid=characters-list]');
      cy.get('[data-testid=planet-loader]').should('be.visible');
    });

    it('should loader dissaper after planet loads', () => {
      cy.get('[data-testid=character-item]');
      cy.get('[data-testid=planet-loader]').should('not.exist');
    });
  });
});
