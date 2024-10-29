describe('event planner', () => {
  it('access', { scrollBehavior: false }, () => {
    cy.visit('http://localhost:4173/')

    cy.get('.get-started-button').click();

    cy.get('.events_categories').scrollIntoView()
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > h2').contains('social events', { matchCase: false })
    cy.get('.events_categories > :nth-child(1) > :nth-child(2)').click();
    cy.get('.events_categories > :nth-child(1) > :nth-child(3)').click();
    cy.get('.events_categories > :nth-child(1) > :nth-child(4)').click();
    cy.get('.events_categories > :nth-child(1) > :nth-child(5)').click();
    cy.get('.events_categories > :nth-child(1) > :nth-child(6)').click();
    cy.get('.events_categories > :nth-child(1) > :nth-child(7)').click();
    //cy.get('.events_categories').children('li').contains('Birthday parties').click();
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(2) > h2').contains('Entertainment Events', { matchCase: false })
    cy.get('.events_categories > :nth-child(2) > :nth-child(2)').click();
    cy.get('.events_categories > :nth-child(2) > :nth-child(3)').click();
    cy.get('.events_categories > :nth-child(2) > :nth-child(4)').click();
    cy.get('.events_categories > :nth-child(2) > :nth-child(5)').click();
    cy.get('.events_categories > :nth-child(2) > :nth-child(6)').click();
    cy.get('.events_categories > :nth-child(2) > :nth-child(7)').click();
    /* ==== End Cypress Studio ==== */

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > h2').contains('Community Events', { matchCase: false })
    cy.get('.events_categories > :nth-child(3) > :nth-child(2)').click();
    cy.get('.events_categories > :nth-child(3) > :nth-child(3)').click();
    cy.get('.events_categories > :nth-child(3) > :nth-child(4)').click();
    cy.get('.events_categories > :nth-child(3) > :nth-child(5)').click();
    cy.get('.events_categories > :nth-child(3) > :nth-child(6)').click();
    cy.get('.events_categories > :nth-child(3) > :nth-child(7)').click();
    /* ==== End Cypress Studio ==== */

    cy.get('.contact').scrollIntoView()
    cy.get('[type="text"]').clear().type('name');
    cy.get('[type="email"]').clear().type('email@com.br');
    cy.get('.submit-button').click();

  })
})