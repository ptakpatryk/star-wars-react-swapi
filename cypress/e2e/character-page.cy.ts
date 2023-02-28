
describe('character page spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/character/1');
  });

  context('routing', () => {
    it('should go back button take you to the home page', () => {
      cy.get('[data-testid=back-btn]').click();
      cy.location('pathname').should('eq', '/');
    });

    it('should logo take you to the home page', () => {
      cy.get('[data-testid=logo]').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  context('editing', () => {
    it('should be edit to change gender', () => {
      const NEW_GENDER = 'new gender';

      cy.get('[data-testid="gender-edit"]').click();
      cy.get('input:visible').type(NEW_GENDER);
      cy.get('[data-testid="gender-save"]').click();
      cy.get('[data-testid="gender-value"]').should('contain.text', NEW_GENDER);
    });

    it('should be edit to change height only passing number', () => {
      const INCORECT_HEIGHT = 'tall';
      const NEW_HEIGHT = '12312';

      cy.get('[data-testid="height-edit"]').click();
      cy.get('input:visible').type(INCORECT_HEIGHT);
      cy.get('[data-testid="height-save"]').click();
      cy.get('[data-testid="height-value"]').should('not.contain.text', INCORECT_HEIGHT);

      cy.get('[data-testid="height-edit"]').click();
      cy.get('input:visible').type(NEW_HEIGHT);
      cy.get('[data-testid="height-save"]').click();
      cy.get('[data-testid="height-value"]').should('contain.text', NEW_HEIGHT);
    });
  });
});
