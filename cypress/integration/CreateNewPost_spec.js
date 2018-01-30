describe('CreateNewPost.js', () => {

  context('New post', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('should be able to create new post', () => {
      cy.get('#title')
        .type('Cool title', { delay: 200 })
      cy.get('#content')
        .type('Such content, much wow', { delay: 200 })
      cy.get('.flex-wrap > :nth-child(1) > .bg-indigo-dark')
        .click();
      cy.wait(1000);
      cy.get('.flex-wrap > :nth-child(2)')
        .children()
        .first()
        .should('contain', 'title');
    });

  })

});