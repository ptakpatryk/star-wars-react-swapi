describe('home page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  context('characters list', () => {
    it('should show loader first when fetchin data', () => {
      cy.get('[data-testid=page-loader]').should('be.visible');
    });

    it('should loader disappear when characters are fetched', () => {
      cy.get('[data-testid=characters-list]').should('be.visible');
      cy.get('[data-testid=page-loader]').should('not.exist');
    });

    it('should loader dissaper after planet loads', () => {
      cy.get('[data-testid=character-item]');
      cy.get('[data-testid=planet-loader]').should('not.exist');
    });
  });

  context('user journey', () => {
    it.only('character card should route to the character detail page', () => {
      cy.get('[data-testid=character-item-btn]').first().click();
      cy.location('pathname').should('contain', '/character');
    });
  });

});
