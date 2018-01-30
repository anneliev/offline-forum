describe('Button.js', () => {
  
  context('Button', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('[data-test="button"]').as('button');
    })

    it('should have a class', () => {
      cy.get('@button')
        .should('have.class', 'bg-indigo-dark');
    })

    it('should change text when clicked', () => {
      cy.get('@button')
        .should('have.text', 'Talk to a real human');
      cy.wait(2000);
      cy.get('@button')
        .click();
      cy.wait(3000);
      cy.get('@button')
        .should('have.text', 'Return to forum');
      cy.get('@button')
        .click();
      cy.get('@button')
        .should('have.text', 'Talk to a real human');
    });


  });

});