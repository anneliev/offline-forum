describe('CreateNewComment.js', () => {

  context('New comment', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });


    it('should be able to create a comment', () => {
      cy.get(':nth-child(2) > div.py-2 > .container > #comment')
        .type('Very comment', { delay: 200 })
      cy.get(':nth-child(2) > div.py-2 > .container > .bg-indigo-dark')
        .click();
      cy.wait(1000);
      cy.get(':nth-child(2) > :nth-child(2) > .relative')
        .children()
        .first()
        .should('contain', 'comment');
    });

  })

});